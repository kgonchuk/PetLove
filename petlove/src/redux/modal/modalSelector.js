export const selectIsOpenModal = (state) => state.modal.isOpenModal;
export const selectModalData = (state) => state.modal.modalData;
export const selectIsModalOpen = (state, modalId) =>
  state.modal.modals[modalId];
