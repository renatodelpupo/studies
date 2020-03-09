export default {

  data: () => ({
    voucher: {
      inputLabel: 'Insert voucher',
      status: 'blank',
      messages: {
        success: 'Voucher successfully applied!'
      }
    }
  }),

  methods: {
    findVoucher() {
      this.voucher.status = 'success'
    }
  }
}