export function getLink(link) {
  return {
    title: link.data.title,
    ref: link.data.ref,
    id: link.id
  };
}

export function getSpeaker({about, title, name, photo}) {
  return {
    about: about[0].text,
    title,
    name: name[0].text,
    photo: photo.url 
  };
}

export function getProgram(program) {
  return {
    
  };
}
