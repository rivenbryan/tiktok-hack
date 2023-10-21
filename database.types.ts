export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      group: {
        Row: {
          days: number | null
          deadline: string | null
          distance: number | null
          groupleader: string | null
          groupleaderRating: string | null
          groupname: string
          id: number
          location: string | null
          profileLink: string | null
        }
        Insert: {
          days?: number | null
          deadline?: string | null
          distance?: number | null
          groupleader?: string | null
          groupleaderRating?: string | null
          groupname: string
          id?: number
          location?: string | null
          profileLink?: string | null
        }
        Update: {
          days?: number | null
          deadline?: string | null
          distance?: number | null
          groupleader?: string | null
          groupleaderRating?: string | null
          groupname?: string
          id?: number
          location?: string | null
          profileLink?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          group_id: number | null
          id: number
          text: string
          timestamp: string
          username: string
        }
        Insert: {
          group_id?: number | null
          id?: number
          text: string
          timestamp?: string
          username: string
        }
        Update: {
          group_id?: number | null
          id?: number
          text?: string
          timestamp?: string
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_group_id_fkey"
            columns: ["group_id"]
            referencedRelation: "group"
            referencedColumns: ["id"]
          }
        ]
      }
      user: {
        Row: {
          id: string
          user_name: string
        }
        Insert: {
          id: string
          user_name: string
        }
        Update: {
          id?: string
          user_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
