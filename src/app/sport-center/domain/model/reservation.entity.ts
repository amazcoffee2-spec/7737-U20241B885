import { BaseEntity} from '../../../shared/domain/model/base-entity';

export class Reservation implements BaseEntity {
  #id:number;
  #sportsCenterId:string;
  #activityType:string;
  #participantName:string;
  #participants: string;
  #weatherTemperature:string;
  #reservedAt:string;


  constructor(props:{id:number; sportsCenterId:string; activityType:string; participantName:string; participants:string;
  weatherTemperature:string; reservedAt:string;}) {
    this.#id=props.id;
    this.#sportsCenterId = props.sportsCenterId;
    this.#activityType = props.activityType;
    this.#participantName = props.participantName;
    this.#participants = props.participants;
    this.#weatherTemperature = props.weatherTemperature;
    this.#reservedAt = props.reservedAt;
  }
  get id():number { return this.#id; }
  get sportsCenterId():string { return this.#sportsCenterId; }
  get activityType():string { return this.#activityType; }
  get participantName():string { return this.#participantName; }
  get participants():string { return this.#participants; }
  get weatherTemperature():string { return this.#weatherTemperature; }
  get reservedAt():string { return this.#reservedAt; }
  set id(value:number) { this.#id = value; }
  set sportsCenterId(value:string) { this.#sportsCenterId = value; }
  set activityType(value:string) { this.#activityType = value; }
  set participantName(value:string) { this.#participantName = value; }
  set participants(value:string) { this.#participants = value; }
  set weatherTemperature(value:string) { this.#weatherTemperature = value; }
  set reservedAt(value:string) { this.#reservedAt = value; }
}
