import type {RequestEvent} from "@sveltejs/kit";
import {fail, redirect} from "@sveltejs/kit";
import {setError, superValidate} from "sveltekit-superforms/server";
import {z} from "zod";

const registerUserSchema = z.object({
    email: z.string().email(),
    username: z.string().min(1, {message: "Username is required"}),
    password: z.string().min(8, {message: "Password must be longer than 8 characters"}),
    repassword: z.string()
}).refine((data) => data.password === data.repassword, {
    message: "Password doesn't match",
    path: ["repassword"]
});

export const load = async (event: RequestEvent) => {
    const form = await superValidate(event, registerUserSchema);
    return {
        form
    }
}

export const actions = {
    default: async (event: RequestEvent) => {
        const form = await superValidate(event, registerUserSchema);

        if (!form.valid) {
            return fail(400, {
                form
            });
        }

        const {error} = await event.locals.supabase.auth.signUp(
            {
                email: form.data.email,
                password: form.data.password,
                options: {
                    data: {
                        username: form.data.username,
                    }
                }
            }
        )

        if (error) {
            return setError(form, 'email', error.message);
        }

        throw redirect(302, "/login");
    }
}