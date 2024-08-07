export interface IListable {
  id: string;
  name?: string;
  title?: string;
  description?: string;
  picture: string;

  thumbnail: {
    path: string;
    extension: string;
  };
}
