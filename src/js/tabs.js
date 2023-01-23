function setTechTabs(index, tabsClassName, cardsClassName) {
  let tabs = document.getElementsByClassName(tabsClassName);
  let cardsGroup = document.getElementsByClassName(cardsClassName);

  for (let i = 0; i < tabs.length; i++) {
    if (i !== index) {
      tabs[i].classList.remove('active');
      cardsGroup[i].classList.remove('active');
    }    
  }
  tabs[index].classList.add('active');
  cardsGroup[index].classList.add('active');
}
