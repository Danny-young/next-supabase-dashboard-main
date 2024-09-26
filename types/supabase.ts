export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      applicationform: {
        Row: {
          created_at: string
          degree: string | null
          email: string | null
          gender: string | null
          id: number
          preferredmodule: string | null
          student_id: string | null
        }
        Insert: {
          created_at?: string
          degree?: string | null
          email?: string | null
          gender?: string | null
          id?: number
          preferredmodule?: string | null
          student_id?: string | null
        }
        Update: {
          created_at?: string
          degree?: string | null
          email?: string | null
          gender?: string | null
          id?: number
          preferredmodule?: string | null
          student_id?: string | null
        }
        Relationships: []
      }
      courses: {
        Row: {
          course_code: string
          course_grade: number | null
          course_name: string
          id: number
          student_id: string | null
        }
        Insert: {
          course_code: string
          course_grade?: number | null
          course_name: string
          id?: number
          student_id?: string | null
        }
        Update: {
          course_code?: string
          course_grade?: number | null
          course_name?: string
          id?: number
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "courses_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "eligible_students"
            referencedColumns: ["student_id"]
          },
          {
            foreignKeyName: "courses_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["student_id"]
          },
        ]
      }
      member: {
        Row: {
          created_at: string
          email: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          id: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      modules: {
        Row: {
          course_code: string
          course_name: string
          id: number
          min_gpa: number | null
          required_courses: string
          required_training: string | null
          work_permit_required: boolean | null
        }
        Insert: {
          course_code: string
          course_name: string
          id?: number
          min_gpa?: number | null
          required_courses?: string
          required_training?: string | null
          work_permit_required?: boolean | null
        }
        Update: {
          course_code?: string
          course_name?: string
          id?: number
          min_gpa?: number | null
          required_courses?: string
          required_training?: string | null
          work_permit_required?: boolean | null
        }
        Relationships: []
      }
      permission: {
        Row: {
          created_at: string
          id: number
          member_id: string | null
          role: string
          status: string
        }
        Insert: {
          created_at?: string
          id?: number
          member_id?: string | null
          role: string
          status: string
        }
        Update: {
          created_at?: string
          id?: number
          member_id?: string | null
          role?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "permission_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "member"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          additional_info: string | null
          avatar: string | null
          degree: string | null
          email: string
          gender: string | null
          gpa: number | null
          id: number
          name: string
          student_id: string | null
          work_permit_required: boolean | null
        }
        Insert: {
          additional_info?: string | null
          avatar?: string | null
          degree?: string | null
          email: string
          gender?: string | null
          gpa?: number | null
          id?: number
          name: string
          student_id?: string | null
          work_permit_required?: boolean | null
        }
        Update: {
          additional_info?: string | null
          avatar?: string | null
          degree?: string | null
          email?: string
          gender?: string | null
          gpa?: number | null
          id?: number
          name?: string
          student_id?: string | null
          work_permit_required?: boolean | null
        }
        Relationships: []
      }
    }
    Views: {
      eligible_students: {
        Row: {
          additional_info: string | null
          avatar: string | null
          course_code: string | null
          course_grade: number | null
          course_name: string | null
          degree: string | null
          email: string | null
          gender: string | null
          gpa: number | null
          min_gpa: number | null
          name: string | null
          required_courses: string | null
          student_id: string | null
          work_permit_required: boolean | null
        }
        Relationships: []
      }
    }
    Functions: {
      is_admin: {
        Args: {
          user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
