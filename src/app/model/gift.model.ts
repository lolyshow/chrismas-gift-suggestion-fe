export interface Gift {
  title: string;
  description: string;
  image: string;
}

export interface ApiResponse {
  status: number;
  message: string;
  data: Gift[];
}
