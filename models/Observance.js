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
          required: true,
          maxLength: 200
        },
        userStateId: {
          type: String,
          required: true,
        },
        userPicturePath: {
          type: String,
          required: true,
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