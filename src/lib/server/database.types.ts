export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      dev_post: {
        Row: {
          content: string
          cover_image: string | null
          id: number
          name: string
          product_id: number | null
          published: boolean | null
        }
        Insert: {
          content: string
          cover_image?: string | null
          id?: number
          name: string
          product_id?: number | null
          published?: boolean | null
        }
        Update: {
          content?: string
          cover_image?: string | null
          id?: number
          name?: string
          product_id?: number | null
          published?: boolean | null
        }
      }
      dev_post_tag: {
        Row: {
          dev_post_id: number
          post_tag_id: number
        }
        Insert: {
          dev_post_id: number
          post_tag_id: number
        }
        Update: {
          dev_post_id?: number
          post_tag_id?: number
        }
      }
      event: {
        Row: {
          end_at: string | null
          id: number
          start_at: string | null
        }
        Insert: {
          end_at?: string | null
          id?: number
          start_at?: string | null
        }
        Update: {
          end_at?: string | null
          id?: number
          start_at?: string | null
        }
      }
      event_discount: {
        Row: {
          discount_id: number | null
          event_id: number | null
          id: number
        }
        Insert: {
          discount_id?: number | null
          event_id?: number | null
          id?: number
        }
        Update: {
          discount_id?: number | null
          event_id?: number | null
          id?: number
        }
      }
      game_tag: {
        Row: {
          desc: string
          id: number
          name: string
        }
        Insert: {
          desc: string
          id?: number
          name: string
        }
        Update: {
          desc?: string
          id?: number
          name?: string
        }
      }
      individual_discount: {
        Row: {
          discount_id: number | null
          end_at: string | null
          id: number
          start_at: string | null
        }
        Insert: {
          discount_id?: number | null
          end_at?: string | null
          id?: number
          start_at?: string | null
        }
        Update: {
          discount_id?: number | null
          end_at?: string | null
          id?: number
          start_at?: string | null
        }
      }
      order: {
        Row: {
          created_at: string | null
          id: number
          modified_at: string | null
          status: Database["public"]["Enums"]["order_status"] | null
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          modified_at?: string | null
          status?: Database["public"]["Enums"]["order_status"] | null
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          modified_at?: string | null
          status?: Database["public"]["Enums"]["order_status"] | null
          user_id?: number | null
        }
      }
      order_item: {
        Row: {
          id: number
          order_id: number | null
          product_discount_id: number | null
          product_id: number | null
          product_pricing_id: number | null
        }
        Insert: {
          id: number
          order_id?: number | null
          product_discount_id?: number | null
          product_id?: number | null
          product_pricing_id?: number | null
        }
        Update: {
          id?: number
          order_id?: number | null
          product_discount_id?: number | null
          product_id?: number | null
          product_pricing_id?: number | null
        }
      }
      patch_note: {
        Row: {
          id: number
          note: string | null
          product_id: number | null
          version: string
        }
        Insert: {
          id?: number
          note?: string | null
          product_id?: number | null
          version: string
        }
        Update: {
          id?: number
          note?: string | null
          product_id?: number | null
          version?: string
        }
      }
      platform: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
      }
      post_tag: {
        Row: {
          id: number
          post_tag: string | null
        }
        Insert: {
          id: number
          post_tag?: string | null
        }
        Update: {
          id?: number
          post_tag?: string | null
        }
      }
      product: {
        Row: {
          banner_path: string
          desc: string
          id: number
          logo_path: string
          name: string
          owner_id: number | null
          parent_product_id: number | null
          product_path: string
          released_at: string | null
          type: Database["public"]["Enums"]["product_type"] | null
        }
        Insert: {
          banner_path: string
          desc: string
          id?: number
          logo_path: string
          name: string
          owner_id?: number | null
          parent_product_id?: number | null
          product_path: string
          released_at?: string | null
          type?: Database["public"]["Enums"]["product_type"] | null
        }
        Update: {
          banner_path?: string
          desc?: string
          id?: number
          logo_path?: string
          name?: string
          owner_id?: number | null
          parent_product_id?: number | null
          product_path?: string
          released_at?: string | null
          type?: Database["public"]["Enums"]["product_type"] | null
        }
      }
      product_discount: {
        Row: {
          created_at: string | null
          desc: string
          id: number
          percentage: number
          product_id: number
        }
        Insert: {
          created_at?: string | null
          desc: string
          id?: number
          percentage: number
          product_id: number
        }
        Update: {
          created_at?: string | null
          desc?: string
          id?: number
          percentage?: number
          product_id?: number
        }
      }
      product_game_tag: {
        Row: {
          game_tag_id: number
          product_id: number
        }
        Insert: {
          game_tag_id: number
          product_id: number
        }
        Update: {
          game_tag_id?: number
          product_id?: number
        }
      }
      product_platform: {
        Row: {
          platform_id: number
          product_id: number
        }
        Insert: {
          platform_id: number
          product_id: number
        }
        Update: {
          platform_id?: number
          product_id?: number
        }
      }
      product_pricing: {
        Row: {
          base_price: number
          id: number
          product_id: number
          started_at: string | null
        }
        Insert: {
          base_price: number
          id?: number
          product_id: number
          started_at?: string | null
        }
        Update: {
          base_price?: number
          id?: number
          product_id?: number
          started_at?: string | null
        }
      }
      review: {
        Row: {
          content: string
          is_upvote: boolean
          order_item_id: number
          user_id: number
        }
        Insert: {
          content: string
          is_upvote: boolean
          order_item_id: number
          user_id: number
        }
        Update: {
          content?: string
          is_upvote?: boolean
          order_item_id?: number
          user_id?: number
        }
      }
      user: {
        Row: {
          active: boolean | null
          created_at: string | null
          dob: string | null
          email: string
          id: number
          modified_at: string | null
          password: string | null
          username: string
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          dob?: string | null
          email: string
          id?: number
          modified_at?: string | null
          password?: string | null
          username: string
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          dob?: string | null
          email?: string
          id?: number
          modified_at?: string | null
          password?: string | null
          username?: string
        }
      }
      user_cart: {
        Row: {
          product_id: number
          user_id: number
        }
        Insert: {
          product_id: number
          user_id: number
        }
        Update: {
          product_id?: number
          user_id?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      order_status: "paid" | "unpaid" | "cancel"
      payment_status: "processing" | "succeeded" | "failed"
      product_type: "game" | "dlc"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
