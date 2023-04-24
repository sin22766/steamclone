import {fail, redirect} from "@sveltejs/kit";
import {setError, superValidate} from "sveltekit-superforms/server";
import {z} from "zod";

const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message: "Password is invalid"}),
})

export const load = async (event) => {
    const form = await superValidate(event, userLoginSchema);
    return {
        form
    }
}

export const actions = {
    default: async (event) => {
        const form = await superValidate(event, userLoginSchema);

        if (!form.valid) {
            return fail(400, {
                form
            });
        }

        const {error} = await event.locals.supabase.auth.signInWithPassword(
            {
                email: form.data.email,
                password: form.data.password,
            }
        )

        if (error) {
            setError(form, 'email', error.message);
            return setError(form, 'password', error.message);
        }

        throw redirect(302, "/");
    }
}