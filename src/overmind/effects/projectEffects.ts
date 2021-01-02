export const waiting = {
  getCurrentUser() {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 3000);
    });
  }
}