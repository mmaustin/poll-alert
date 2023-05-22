import mongoose from "mongoose";

const ObservanceSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        description: {
          type: String,
          required: true
        },
        stateId: {
          type: String,
          required: true,
        },
        userPicturePath: {
          type: String,
          required: true,
          default: ''
        },
        pollingPlace: {
          type: String,
          required: true
        },
        alsoObserved: {
            type: Map,
            of: Boolean,
        }
    },
    {timestamps: true}
);

const Observance = mongoose.model("Observance", ObservanceSchema);
export default Observance;