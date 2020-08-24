/* --- STATE --- */
export interface AuthState {
  authenticated: boolean;
  loading: boolean;
  error: boolean;
}

export type ContainerState = AuthState;
