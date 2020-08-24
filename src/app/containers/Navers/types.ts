/* --- STATE --- */
export interface Naver {
  id?: string;
  name?: string;
  admission_date?: string;
  job_role?: string;
  user_id?: string;
  project?: string;
  birthdate?: string;
  url?: string;
}
export interface NaversState {
  navers: Naver[];
  naver: Naver;
  loading: boolean;
  error: boolean;
}

export type ContainerState = NaversState;
