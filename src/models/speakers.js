import { getSpeaker } from '../utils';

export default function speakers({title, description, speakers_list: speakers}) {
  return {
    title,
    description,
    speakers: speakers.data.items.map((el) => getSpeaker(el.speaker))
  };
}