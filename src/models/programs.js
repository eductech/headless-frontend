import { getProgram } from '../utils';

export default function programs({title, description, programs_list: programs}) {
  return {
    title,
    description,
    programs: programs.data.items.map((el) => getProgram(el.program))
  };
}