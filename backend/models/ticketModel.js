const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
      enum: ['iphone' , 'Macbooks' , 'ipad' , 'iMac'],
    },
    description: {
      type: String,
      required: [true, 'Please describe your issue'],
    },
    status: {
      type: Boolean,
      required: true,
      enum : ['new' , 'open' , 'closed'],
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Ticket', ticketSchema)

