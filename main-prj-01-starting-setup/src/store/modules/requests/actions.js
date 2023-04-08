export default {
  contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };

    fetch(
      'https://vue-find-mycoach-default-rtdb.asia-southeast1.firebasedatabase.app/'
    );
    context.commit('addRequest', newRequest);
  },
};
