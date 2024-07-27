export interface InitialStateProps {
  posts: Array<{
    userId: number;
    id: number;
    title: string;
    body: string;
  }>;
  isLoadingPosts: boolean;
}
