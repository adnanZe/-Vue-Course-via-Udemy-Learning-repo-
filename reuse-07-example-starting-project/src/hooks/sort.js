import { ref, computed } from 'vue';

export const useSort = (availableItems, sortProperty) => {
  const sorting = ref(null);
  const displayedItems = computed(() => {
    if (!sorting.value) {
      return availableItems.value;
    }
    return availableItems.value.slice().sort((i1, i2) => {
      if (sorting.value === 'asc' && i1[sortProperty] > i2[sortProperty]) {
        return 1;
      } else if (sorting.value === 'asc') {
        return -1;
      } else if (
        sorting.value === 'desc' &&
        i1[sortProperty] > i2[sortProperty]
      ) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  const sort = (mode) => (sorting.value = mode);

  return { sorting, displayedItems, sort };
};
