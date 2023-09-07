export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          id: number;
          text: string;
          timestamp: string;
          username: string;
        };
        Insert: {
          id?: number;
          text: string;
          timestamp?: string;
          username: string;
        };
        Update: {
          id?: number;
          text?: string;
          timestamp?: string;
          username?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
