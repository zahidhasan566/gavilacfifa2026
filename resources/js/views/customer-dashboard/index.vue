<template>
    <div class="container-fluid" style="color: #000000 !important">
        <div class="container">
            <div :style="{ backgroundImage: `url(${mainOrigin}assets/images/back3.jpg)`}">
                <div class="logo-container" style="text-align:center; padding-top:20px">
                    <img :src="`${mainOrigin}assets/images/job-logo.png`" alt="Job Logo" class="job-logo" />
                </div>

                <div class="row card-body" style="padding-bottom:0"> <div class="col-md-12" style="text-align:initial"><h3 style="color: #AA60C8">Customer Information : </h3></div></div>
                <div class="row card-body customer-info">
                    <div class="col-md-4">
                        <p>Customer Name <strong  class="dstrong"> : {{customerName}} </strong></p>
                        <p>Chassis Number <strong  class="dstrong"> : {{chassisNo}} </strong></p>
                        <p >Model<strong  class="dstrong"> : {{model}} </strong></p>
                        <p >Purchase Date <strong  class="dstrong"> : {{purchaseDate}} </strong></p>
                        <p > Under Warranty<strong  class="dstrong"> :
                            <span v-if="underWarrenty=='Y'">Yes</span>
                            <span v-else>No</span>

                        </strong></p>
                        <p >Mileage<strong class="dstrong">: {{mileage}}</strong> </p>

                    </div>
                    <div class="col-md-4">
                        <p >Job card Number<strong class="dstrong"> : {{jobCardNo}}</strong> </p>
                        <p >Job Date<strong  class="dstrong"> : {{jobDate}}</strong></p>
                        <p>Job Type<strong class="dstrong"> : {{jobType}}</strong> </p>
                        <p>Job Start Time<strong  class="dstrong"> : {{startTime}}</strong> </p>
                        <p >Job Estimated Time<strong  class="dstrong"> : {{timeReqMin}} (min)</strong> </p>
                        <p >Job End Time <strong  class="dstrong">: {{endTime}}</strong>  </p>

                    </div>

                    <div class="col-md-4">
                        <p >Dealer Name<strong class="dstrong">: {{serviceHistoryDealerName}} </strong>  </p>
                        <p > Service Total<strong class="dstrong"> : {{serviceFieldGrandTotal}}</strong></p>
                        <p >Parts Total<strong class="dstrong"> : {{partsFieldGrandTotal}} </strong></p>
                        <p >Grand Total<strong class="dstrong"> : {{ parseFloat(serviceFieldGrandTotal)  + parseFloat(partsFieldGrandTotal)}} </strong> </p>
                        <p >Job Card for details<strong class="dstrong">  :   <router-link class="btn btn-primary" style="font-size: 12px;width:65px;padding: 2px 0px" target='_blank' :to="{path: `${baseUrl}`+'job-card-print?action_type=print&jobCardNo='+encodeConvert(jobCardNo)}">Download</router-link></strong> </p>
                        <p >YTD File Download<strong class="dstrong"> :

                            <span v-if="ydtFileLink.length>0"><a  class="btn btn-primary" style="font-size: 12px;width:65px;padding: 2px 0px" :href=ydtFileLink> Download</a></span>
                            <span v-else>No File Found</span>
                             </strong> </p>
                    </div>
                </div>

                <div class="row card-body" style="padding-bottom: 0"> <div class="col-md-12" style="text-align:initial;color: #57B4BA"><h3>Job Card Progress : </h3></div></div>
                <div class="row card-body">
                    <div class="col-md-12">
                        <div id="ProgressBarID">
                            <ProgressBar :steps="steps" :currentStep="currentStep" />
                            <div class="content">
                                <div v-if="currentStep === 1">
                                    <h4>Status: <span style="color:#0d9f0d">Waiting For Repair</span></h4>
                                    <!-- Add your form fields here -->
                                </div>
                                <div v-if="currentStep === 2">
                                    <h4>Status: <span style="color:#219af3"> Job Ongoing </span></h4>
                                    <!-- Add your form fields here -->
                                </div>
                                <div v-if="currentStep === 4">
                                    <h4>Status : <span style="color:#3f51b5"> Ready for Delivery </span></h4>
                                    <!-- Add your form fields here -->
                                </div>
                                <div v-if="currentStep === 3">
                                    <h4> Status: <span style="color:#45bcc3"> Job Complete </span></h4>
                                    <!-- Add your form fields here -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row card-body">
                    <div class="col-md-6">
                        <div style="padding-bottom: 10px">
                            <p style="margin: 0;padding: 0">Online Booking Site :
                                <a href="https://booking.yamahabd.com/" target="_blank" rel="noopener noreferrer">
                                    booking.yamahabd.com
                                </a>
                            </p>
                        </div>

                        <div>
                            <p style="margin: 0;padding: 0">For any Service & Spares Query : <span style="color:red">16533</span></p>
                        </div>
                    </div>
                    <div class="col-md-6 acligo">
                        <img style="height: 50px" :src="`${mainOrigin}assets/images/aci-logo-wb.png`" alt="ACI Logo" class="aci-logo" />
                    </div>

                </div>

            </div>
        </div>


    </div>
</template>
<script >

import {bus} from "../../app";
import {Common} from "../../mixins/common";
import moment from "moment";
import ProgressBar from "../../components/ProgressBar/ProgressBar.vue"
import {baseurl} from "../../base_url";

export default {
    mixins: [Common],
    components: {
        ProgressBar,
    },
    data() {
        return {
            baseUrl: baseurl,
            bikeImage: '/assets/images/back1.jpeg', // Ensure it's accessible via URL
            title: '',
            buttonText: '',
            status: '',
            confirm: '',
            type: 'add',
            actionType: '',
            buttonShow: false,
            errors: [],
            duplicateErrors: [],
            dayStr: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            jobDate: moment().format('YYYY-MM-DD'),
            jobCardNo: '',
            chassisNo: '',
            serviceCenterCode: '',
            allchassisNo: [],
            freeServices: [],
            engineNo: '',
            customerName: '',
            mobileNo: '',
            brand: '',
            model: '',
            purchaseDate: '',
            underWarrenty: '',
            registrationNo: '',
            bookingNo: '',
            serial: '',
            mileage: 0,
            technicianCode: '',
            bayCode: '',
            jobStatus: '',
            allJobType: [],
            parentJobType: [],
            childJobType: [],
            childJobTypeStatusReadOnly: false,
            jobType: '',
            ServiceNo: '',
            ytdStatus: '',
            ydTFile: '',
            ydtFileLink: '',
            AttachmentFlag: 0,
            fiStatus: '',
            address: '',
            failureAnalysis: '',
            problemId: '',
            otherProblem: '',
            reasonAndProblemDetails: '',
            timeReqMin: 0,
            timeTaken: 0,
            startTime: 0,
            endTime: 0,
            discountType: '',
            discount: 0,
            staffId: '',
            ytdNoReason: [],
            fiNoReason: [],
            ytdNoTag: false,
            fiNoTag: false,
            reasonOfYDT: '',
            reasonOfFI: '',
            PreLoader: false,
            ydtFileName:'',


            read: true,
            allTechnician: [],
            allBay: [],
            allProblem: [],

            partsFields: [],
            partsFieldTotalPrice: 0,
            partsFieldTotalServiceCharge: 0,
            partsFieldTotalDiscount: 0,
            partsFieldGrandTotal: 0,
            partsFieldTotalQty: 0,

            serviceFields: [],
            serviceFieldTotalDiscount: 0,
            serviceFieldGrandTotal: 0,
            reference: '',

            serviceHistoryDealerName: '',
            serviceHistoryLastServiceType: '',
            serviceHistoryLastScheduleTitle: '',
            serviceHistoryLastServiceDate: '',
            serviceHistoryLastFeedbackRating: '',
            serviceHistoryLastMillage: '',
            parts: [],
            works: [],
            allJobStatus: [],
            workName: '',
            workRate: 0,
            comments: '',
            active: '',
            workCode: '',
            allReference: [],
            showElements: true,
            steps: [
                { label: 'Waiting For Repair' },
                { label: 'Job Ongoing' },
                { label: 'Job Complete' },
                { label: 'Ready for Delivery' }
            ],
            currentStep: 0, // Default step
        }
    },
    mounted() {
        let instance = this;
        var jobCard = this.$route.params.jobCardNo;
         let JobCardNo = this.decodeConvert(jobCard)
        this.axiosGet('jobCard/get/jobCard/modal/' + JobCardNo, function (response) {
            instance.title = 'Update Job Card';
            instance.buttonText = "Update";
            instance.buttonShow = true;
            instance.actionType = 'edit';
            if (response.existingJobCard[0]) {

                //Job Card
                let existingJobCardInfo = response.existingJobCard[0]
                instance.jobCardNo = existingJobCardInfo.JobCardNo
                instance.jobDate = moment(existingJobCardInfo.JobDate).format('YYYY-MM-DD')
                instance.chassisNo = existingJobCardInfo.ChassisNo
                instance.serviceCenterCode = existingJobCardInfo.ServiceCenterCode
                instance.engineNo = existingJobCardInfo.EngineNo
                instance.customerName = existingJobCardInfo.CustomerName
                instance.mobileNo = existingJobCardInfo.MobileNo
                instance.brand = existingJobCardInfo.Brand
                instance.model = existingJobCardInfo.Model
                instance.purchaseDate = moment(existingJobCardInfo.PurchaseDate).format('YYYY-MM-DD')
                instance.underWarrenty = existingJobCardInfo.UnderWarrenty
                instance.serviceHistoryDealerName =     existingJobCardInfo.DealerName
                instance.registrationNo = existingJobCardInfo.RegistrationNo
                // instance.bookingNo=existingJobCardInfo.
                instance.serial = existingJobCardInfo.SerialNo
                instance.mileage = existingJobCardInfo.Mileage
                instance.failureAnalysis = existingJobCardInfo.MotorcycleOuterCondition

                instance.technicianCode = {
                    Details: existingJobCardInfo.TechnicianCode + '-' + existingJobCardInfo.TechnicianName,
                    TechnicianCode: existingJobCardInfo.TechnicianCode
                }
                instance.bayCode = {
                    Details: existingJobCardInfo.BayCode + '-' + existingJobCardInfo.BayName,
                    BayCode: existingJobCardInfo.BayCode
                }
                if (existingJobCardInfo.JobStatus === 'Ongoing' || existingJobCardInfo.JobStatus === 'Start') {
                    instance.currentStep =2
                }
                if (existingJobCardInfo.JobStatus === 'Waiting' || existingJobCardInfo.JobStatus === 'Pending') {
                    instance.currentStep =1
                }
                if (existingJobCardInfo.JobStatus === 'ReadyForDelivery') {
                    instance.currentStep =4
                }
                if (existingJobCardInfo.JobStatus === 'ReadyForDelivery' || existingJobCardInfo.JobStatus === 'Close' || existingJobCardInfo.JobStatus === 'READY FOR DELIVERY' || existingJobCardInfo.JobStatus === 'Complete') {
                    instance.currentStep =3
                }


                instance.jobStatus = {
                    StatusName: existingJobCardInfo.JobStatus,
                    StatusCode: existingJobCardInfo.JobStatus
                }
                instance.jobType = existingJobCardInfo.JobTypeName


                let updateJobCardServiceName = ''
                let updateJobCardServiceId = ''
                if (existingJobCardInfo.ScheduleTitle != null && parseInt(existingJobCardInfo.FreeSScheduleID) !== 0) {
                    updateJobCardServiceName = existingJobCardInfo.ScheduleTitle
                    updateJobCardServiceId = existingJobCardInfo.FreeSScheduleID
                    //instance.checkLastServiceHistory(existingJobCardInfo.ChassisNo);
                    instance.childJobTypeStatusReadOnly = false
                } else {
                    updateJobCardServiceName = existingJobCardInfo.JobTypeName
                    updateJobCardServiceId = existingJobCardInfo.JobTypeId
                    instance.childJobTypeStatusReadOnly = true
                }
                instance.ServiceNo = {
                    JobTypeName: updateJobCardServiceName,
                    Id: updateJobCardServiceId
                }

                instance.ytdStatus = existingJobCardInfo.YTD_status
                if (existingJobCardInfo.YTD_status === 'N') {
                    instance.ytdNoTag = true
                    instance.reasonOfYDT = {
                        Ytd_Stauts_Reason: existingJobCardInfo.Ytd_Stauts_Reason,
                        Id: existingJobCardInfo.YTD_status_no_reason
                    }
                }
                if (existingJobCardInfo.FI_Status === 'N') {
                    instance.fiNoTag = true
                    instance.reasonOfFI = {
                        Ytd_Stauts_Reason: existingJobCardInfo.fi_no_reason,
                        Id: existingJobCardInfo.FI_status_no_reason
                    }
                }
                instance.ydtFileName=existingJobCardInfo.YTD_File !==null ? existingJobCardInfo.YTD_File : ''
                instance.fiStatus = existingJobCardInfo.FI_Status
                instance.address = existingJobCardInfo.Address
                // instance.failureAnalysis=existingJobCardInfo.
                let problemEditArray = []
                response.existingJobCard.forEach((item) => {
                    if (item.ProblemDetailsName && item.ProblemDetailsId) {
                        let newObj = {
                            ProblemStatement: item.ProblemDetailsName,
                            PSID: item.ProblemDetailsId
                        }
                        problemEditArray.push(newObj)
                    }

                })
                instance.problemId = problemEditArray.length > 0 ? problemEditArray : []

                instance.otherProblem = existingJobCardInfo.ProblemDetails
                instance.reasonAndProblemDetails = existingJobCardInfo.ReasonProlemRepairDetails
                instance.timeReqMin = existingJobCardInfo.TimeRequired
                instance.timeTaken = existingJobCardInfo.TimeTaken
                instance.startTime = parseInt(existingJobCardInfo.JobStartTime) > 2000 ? moment(existingJobCardInfo.JobStartTime).format('hh:mm A') : 0
                instance.endTime = parseInt(existingJobCardInfo.JobEndTime) > 2000 ? moment(existingJobCardInfo.JobEndTime).format('hh:mm A') : 0
                instance.discountType = existingJobCardInfo.DiscountType
                instance.discount = existingJobCardInfo.DiscountPercent
                instance.staffId = existingJobCardInfo.ACIEmployeeId
                if (existingJobCardInfo.LocalMechanicsCode) {
                    instance.reference = {
                        MechanicsDetails: existingJobCardInfo.LocalMechanicsCode + '-' + existingJobCardInfo.LocalMechanicsName,
                        MechanicsCode: existingJobCardInfo.LocalMechanicsCode
                    }
                }

                //Spare Parts
                let spare_parts = response.existingJobCardPartsInfo;
                if (spare_parts.length > 0) {
                    instance.partsFields.splice(0, 1)
                    spare_parts.forEach((item) => {
                        if (item.ItemCode) {
                            instance.partsFields.push({
                                partsCode: {
                                    FullProduct: item.ItemCode + '-' + item.ProductName,
                                    ProductCode: item.ItemCode
                                },
                                currentStock: item.CurrentStock ? item.CurrentStock : 0,
                                quantity: item.Quantity ? item.Quantity : 0,
                                unitPrice: item.UnitPrice ? item.UnitPrice : 0,
                                totalPrice: item.Quantity * item.UnitPrice,
                                serviceCharge: item.ServiceCharge,
                                discount: item.Discount,
                                partsDiscountPriceInAmount: item.DiscountAmount,

                            })
                        }

                    })
                }
                instance.calculateAllPartsInfo()
                let editService = response.existingJobCardServiceInfo;
                if (editService.length > 0) {
                    instance.serviceFields.splice(0, 1)
                    editService.forEach((serviceItem) => {
                        if (serviceItem.ItemCode) {
                            instance.serviceFields.push({
                                workCode: {
                                    FullProduct: serviceItem.ItemCode + '-' + serviceItem.WorkName,
                                    WorkCode: serviceItem.ItemCode
                                },
                                unitPrice: serviceItem.UnitPrice,
                                serviceDiscount: serviceItem.Discount
                            })
                        }

                    })
                }
                instance.ydtFileLink = response.ydtFile

                instance.calculateAllServiceInfo()
            }
        }, function (error) {
        });
    },
    methods: {
        encodeConvert(val) {
            let convertVal = btoa(val);
            return convertVal
        },
        decodeConvert(val) {
            let convertVal = atob(val);
            return convertVal
        },
        exportData() {
            bus.$emit('export-data','user-list-'+moment().format('YYYY-MM-DD'))
        },
        // Update the step states based on the current step
        completeStep() {
            if (this.currentStep < this.steps.length) {
                this.steps[this.currentStep].completed = true;
                this.steps[this.currentStep].active = false;
                this.currentStep++;
                if (this.currentStep < this.steps.length) {
                    this.steps[this.currentStep].active = true;
                }
            }
        },

        calculateAllPartsInfo() {
            let tempPartsFieldTotalPrice = 0;
            let tempPartsFieldTotalServiceCharge = 0;
            let tempDiscount = 0;
            let tempTotalQty = 0;

            this.partsFieldTotalPrice = 0;
            this.partsFieldTotalServiceCharge = 0;
            this.partsFieldGrandTotal = 0;
            this.partsFieldTotalDiscount = 0;
            this.partsFieldTotalQty = 0;

            this.partsFields.forEach(function (item, index) {
                tempPartsFieldTotalPrice += item.totalPrice ? parseFloat(item.totalPrice) : 0;
                tempPartsFieldTotalServiceCharge += item.serviceCharge ? parseFloat(item.serviceCharge) : 0;
                tempDiscount += item.discount ? item.discount <= 100 ? (parseFloat(item.totalPrice) * parseFloat(item.discount)) / 100 : 0 : 0;
                tempTotalQty += item.quantity ? parseFloat(item.quantity) : 0;
            });

            this.partsFieldTotalPrice = parseFloat(this.partsFieldTotalPrice + tempPartsFieldTotalPrice).toFixed(2);
            this.partsFieldTotalServiceCharge = parseFloat(this.partsFieldTotalServiceCharge + tempPartsFieldTotalServiceCharge).toFixed(2);
            this.partsFieldTotalDiscount = parseFloat(this.partsFieldTotalDiscount + tempDiscount).toFixed(2)
            this.partsFieldGrandTotal = parseFloat((parseFloat(this.partsFieldTotalPrice) + parseFloat(this.partsFieldTotalServiceCharge)) - parseFloat(this.partsFieldTotalDiscount)).toFixed(2)
            this.partsFieldTotalQty = parseFloat(this.partsFieldTotalQty + tempTotalQty).toFixed(2)
        },

        calculateAllServiceInfo() {
            let tempServiceFieldTotalDiscount = 0;
            let tempServiceFieldGrandTotal = 0;
            this.serviceFieldTotalDiscount = 0;
            this.serviceFieldGrandTotal = 0;

            this.serviceFields.forEach(function (item, index) {
                tempServiceFieldGrandTotal += item.unitPrice ? parseFloat(item.unitPrice) : 0;
                tempServiceFieldTotalDiscount += item.serviceDiscount ? item.serviceDiscount <= 100 ? (parseFloat(item.unitPrice) * parseFloat(item.serviceDiscount)) / 100 : 0 : 0;
                item.serviceDiscountPriceInAmount = item.serviceDiscount ? item.serviceDiscount <= 100 ? (parseFloat(item.unitPrice) * parseFloat(item.serviceDiscount)) / 100 : 0 : 0;
            });
            this.serviceFieldTotalDiscount = parseFloat(tempServiceFieldTotalDiscount).toFixed(2);
            this.serviceFieldGrandTotal = parseFloat(parseFloat(tempServiceFieldGrandTotal) - parseFloat(this.serviceFieldTotalDiscount)).toFixed(2);

        },
    }
}
</script>

<style scoped>
.body {
    color: #000000 !important;

}
.pageStart{
    background: url('/public/assets/images/back1.jpeg') no-repeat center center/cover;
    margin: 0;
    height: 100vh; /* Ensure body takes full viewport height */
    display: flex;
    align-items: center;
    justify-content: center;
}
.customer-info{
    border-radius: 10px;
    /*box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);*/
    padding: 20px;
    background: rgba(255, 255, 255, 0.2); /* Transparent background */
    backdrop-filter: blur(10px); /* Blur effect */
    -webkit-backdrop-filter: blur(10px);
}
.dstrong{
    font-weight: bolder;
    color: #000000 !important;
}
.acligo{
    text-align: end;
}
@media (max-width: 768px) {
    .acligo{
        margin-top:20px;
        text-align: center;
    }
}
</style>
