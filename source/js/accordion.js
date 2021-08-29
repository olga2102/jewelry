const addHandler = (evt, fieldsets, closedElement, openedTitle) => {
  if(!evt.currentTarget.classList.contains(closedElement)) { // re-closure
    evt.currentTarget.classList.add(closedElement);
    evt.currentTarget.firstElementChild.classList.remove(openedTitle);
  } else { // show text
    evt.currentTarget.classList.remove(closedElement);
    evt.currentTarget.firstElementChild.classList.add(openedTitle);
  }


  fieldsets.forEach(item => {
    if(!item.classList.contains(closedElement)) {
      item.classList.add(closedElement);
      evt.currentTarget.classList.remove(closedElement);
      item.firstElementChild.classList.remove(openedTitle);
      evt.currentTarget.firstElementChild.classList.add(openedTitle);
    }
  });
};

export { addHandler };
