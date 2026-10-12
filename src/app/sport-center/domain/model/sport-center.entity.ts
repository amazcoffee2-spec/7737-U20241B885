import { BaseEntity} from '../../../shared/domain/model/base-entity';

export class SportCenter implements BaseEntity {
  #id: number;
  #name: string;
  #activityType: string;
  #capacity: number;
  #latitude: number;
  #longitude: number;

  constructor(props:{id:number; name:string; activityType:string; capacity:number;latitude:number; longitude:number}) {
    this.#id = props.id;
    this.#name = props.name;
    this.#activityType = props.activityType;
    this.#capacity = props.capacity;
    this.#latitude = props.latitude;
    this.#longitude = props.longitude;
  }
  get id():number { return this.#id; }
  get name() { return this.#name; }
  get activityType() { return this.#activityType; }
  get capacity() { return this.#capacity; }
  get latitude() { return this.#latitude; }
  get longitude() { return this.#longitude; }

  set id(value:number) { this.#id = value; }
  set name(value) { this.#name = value; }
  set activityType(value) { this.#activityType = value; }
  set capacity(value) { this.#capacity = value; }
  set latitude(value) { this.#latitude = value; }
  set longitude(value) { this.#longitude = value; }
}
