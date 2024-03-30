export type TypePost = {
	id: string
  title: string;
  img: string;
  content: string;
  tags: string[];
  dateCreate: string;
};

export type TypeTagsResponse = {
  tags: string[];
};
export type TypePostResponse = {
  posts: TypePost[];
};
export type TypeGetPost = {
  tag?: string;
  search?: string;
	limit?: number
	sort?: string
	order?: string
	
};
