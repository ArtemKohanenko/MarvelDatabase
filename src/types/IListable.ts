export interface IListable {
  id: string;
  name: string;
  description: string;
  picture: string;

  thumbnail: {
    path: string;
    extension: string;
  };
}
