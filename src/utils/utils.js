export function getLink(link) {
  return {
    title: link.data.title,
    ref: link.data.ref,
    id: link.id
  };
}