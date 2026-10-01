export class Portrait {
  id = 0;
  name: string;
  short_description: string;
  description: string;
  photo: string;
  thumb: string;

  constructor(
    id: number,
    name: string,
    short_description: string,
    description: string,
    photo: string,
    thumb: string
    ) {
      this.id = id;
      this.name = name;
      this.short_description = short_description;
      this.description = description,
      this.photo = photo;
      this.thumb = thumb
    }
}