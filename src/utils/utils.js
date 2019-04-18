export function getLink(link) {
  return {
    title: link.data.title,
    ref: link.data.ref,
    id: link.id
  };
}

export function getSpeaker({data, id}) {
  return {
    id,
    about: getText(data.about),
    title: data.title,
    name: getText(data.name),
    photo: data.photo.url 
  };
}

export function getProgram({data, id}) {
  return {
    id,
    speaker: data.speaker,
    title: getText(data.title),
    date: new Date(data.time)
  };
}

function getText(textObject) {
  return textObject[0].text;
}
