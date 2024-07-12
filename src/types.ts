export interface Post {
    content: string;
    date: string;
    _id: {
		$oid: string;
	}
}