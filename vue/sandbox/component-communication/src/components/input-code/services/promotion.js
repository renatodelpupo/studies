export default {

  data: () => ({
    promotion: {
      inputLabel: 'Insert promotion code',
      status: 'blank',
      messages: {
        success: 'Code successfully applied!'
      }
    }
  }),

  methods: {
    findPromotion() {
      this.promotion.status = 'success'
    }
  }
}