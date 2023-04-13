import { computed, ref, watch } from 'vue';

export const useSearch = (items, searchProp) => {
  const enteredSearchTerm = ref('');
  const activeSearchTerm = ref('');

  const availableItems = computed(() => {
    let filteredItems = [];
    console.log(activeSearchTerm.value);
    if (activeSearchTerm.value) {
      filteredItems = items.filter((item) =>
        item[searchProp].toLowerCase().includes(activeSearchTerm.value)
      );
    } else if (items) {
      filteredItems = items;
    }

    return filteredItems;
  });

  watch(enteredSearchTerm, (newValue) => {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  const updateSearch = (val) => {
    enteredSearchTerm.value = val;
  };

  return { enteredSearchTerm, availableItems, updateSearch };
};
