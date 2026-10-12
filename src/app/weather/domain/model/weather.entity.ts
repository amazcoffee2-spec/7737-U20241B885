import { BaseEntity } from '../../../shared/domain/model/base-entity';

export class Weather implements BaseEntity {
  #id: number;
  #temperature: number;

  constructor(props: { id: number; temperature: number }) {
    this.#id = props.id;
    this.#temperature = props.temperature;
  }

  get id(): number {
    return this.#id;
  }

  set id(value: number) {
    this.#id = value;
  }

  get temperature(): number {
    return this.#temperature;
  }

  set temperature(value: number) {
    this.#temperature = value;
  }
}
