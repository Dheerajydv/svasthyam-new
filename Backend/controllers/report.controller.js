import { ApiError } from "../utils/ApiError";
import { uploadOnCloudinary } from "../utils/cloudinary";
import Report from "../models/report.model";
import { ApiResponse } from "../utils/ApiResponse";

export const addReport = async (request, response) => {
  try {
    const {
      hospitalName,
      reportType,
      issueDate,
      doctorName,
      disease,
      department,
      severity,
      additionalNote,
    } = request.body;
    if (
      !hospitalName ||
      !reportType ||
      !department ||
      !issueDate ||
      !doctorName ||
      !disease ||
      !severity ||
      !additionalNote
    ) {
      throw new ApiError(400, "Please fill all the details.");
    }

    // Picture upload
    const reportImageLocalPaths = (request.files).map((file) => file.path);

    if (!reportImageLocalPaths) {
      throw new ApiError(400, "Report Image is required.");
    }
    const uploadedreportImages = await uploadOnCloudinary(
      reportImageLocalPaths
    );
    if (!uploadedreportImages) {
      throw new ApiError(500, "Picture not uploaded");
    }

    const reportToSave = {
      hospitalName,
      reportType,
      issueDate,
      doctorName,
      disease,
      department,
      severity,
      additionalNote,
      reportImages: uploadedreportImages,
    };

    const addedReport = await Report.create(reportToSave);
    if (!addedReport) {
      throw new ApiError(
        500,
        "Some error occured while trying to save the report."
      );
    }

    response
      .status(201)
      .json(
        new ApiResponse(201, addedReport, "Report added sucessfully.")
      );
  } catch (error) {
    console.error(error);
    response.status(error?.statusCode || 500).json({ error: error });
  }
};

export const getReports = async (request, response) => {
  try {
    const allReports = await Report.find();
    if (!allReports) {
      throw new ApiError(404, "No Report to Show");
    }

    response
      .status(200)
      .json(new ApiResponse(200, allReports, "All Reports Fetched."));
  } catch (error) {
    console.error(error);
    response.status(error?.statusCode || 500).json({ error: error });
  }
};

export const deleteReport = async (request, response) => {
  try {
    const { id: reportId } = request.params;
    if (!reportId) {
      throw new ApiError(404, "Report Id Not Found.");
    }

    const reportToDelete = await Report.findByIdAndDelete(reportId);
    if (!reportToDelete) {
      throw new ApiError(
        500,
        "Some Error occured while deleting the Report."
      );
    }

    response
      .status(200)
      .json(
        new ApiResponse(
          200,
          reportToDelete,
          "Report Deleted Sucessfully."
        )
      );
  } catch (error) {
    console.error(error);
    response.status(error?.statusCode || 500).json({ error: error });
  }
};