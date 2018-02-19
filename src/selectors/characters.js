import moment from 'moment';

//Get visible characters
export default (characters, {text, sortBy, startDate, endDate}) => {
  return characters.filter((character) => {
    const createdAtMoment = moment(character.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = character.name.toLowerCase().includes(text.toLowerCase());    

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'system') {
      return a.system.localeCompare(b.system) ? 1 : -1
    } else if (sortBy === 'name') {
      return a.name.localeCompare(b.name) ? 1 : -1      
    }
  });
};