import { ClassroomResource } from 'kolibri.resources';

/**
 * Do a POST to create new class
 * @param {string} name
 */
export function createClass(store, name) {
  return ClassroomResource.saveModel({
    data: {
      name,
      parent: store.rootGetters.activeFacilityId,
    },
  }).then(
    classroom => {
      store.commit('ADD_CLASS', classroom);
    },
    error => {
      store.dispatch('handleApiError', error, { root: true });
    }
  );
}

/**
 * Do a DELETE to delete the class.
 * @param {string or Integer} id
 */
export function deleteClass(store, id) {
  return ClassroomResource.deleteModel({ id }).then(
    () => {
      store.commit('DELETE_CLASS', id);
    },
    error => {
      store.dispatch('handleApiError', error, { root: true });
    }
  );
}
