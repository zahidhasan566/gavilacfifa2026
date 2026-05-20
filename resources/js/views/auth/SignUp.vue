<template>
    <div>
        <div :style="{ backgroundImage: `url(${BackgroundImage})`}" class="loginBody signUpBody">

            <div>
                <img :src="`${mainOrigin}assets/images/bg/leftIcon.png`" alt="Icon" class="top-left-icon" />
            </div>

            <div class="wrapper-page">

                <div class="p-4 text-white text-center position-relative">
                    <img :src="`${mainOrigin}assets/images/bg/titleImg2.png`" alt="Icon"  />

                </div>

                <div class="loginBg p-4" v-if="!verificationPending">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label class="text-white" for="usermailorphone">Doctor Name</label>
                            <input type="text" id="doctorName" v-model="DoctorName" placeholder="Doctor Name" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <label class="text-white" for="usermailorphone">Region</label>
                            <ValidationProvider name="Mobile No" mode="eager" rules="required"
                                                v-slot="{ errors }">
                            <multiselect v-model="SelectedDistrict" :options="Alldistricts" :multiple="false"
                                         :close-on-select="true"
                                         :clear-on-select="false" :preserve-search="true"
                                         placeholder="Select Region"
                                         label="name" track-by="name" >

                            </multiselect>
                                <span class="error-message"> {{ errors[0] }}</span>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <label class="text-white" for="mobileNo">Mobile Number</label>
                            <input type="tel" pattern='(01)?[0-9]{11}'
                                   class="form-control"
                                   data-index="2"
                                   id="mobileNo"
                                   required
                                   v-model="MobileNo" name="mobileNo"
                                   placeholder="Mobile no">
                        </div>
                        <div class="form-group">
                            <label class="text-white" for="password">Password</label>
                            <input type="password" id="password" v-model="Password" class="form-control" required />
                        </div>
                        <div class="form-group">
                            <label class="text-white" for="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword" v-model="ConfirmPassword" class="form-control" required />
                            <p v-if="passwordMismatch" class="text-danger" style="font-size: 14px;">Passwords do not match.</p>
                        </div>
                        <div class="form-group">
                            <label class="text-white" for="password">Picture <span class="error">(optional)</span></label>
                            <input type="file"
                                   class="form-control"
                                   @change="handleImageUpload"
                                   id="imgTFile"
                                   name="imgFile">
                        </div>
                        <!-- Current Image Preview -->
                        <div class="col-12" v-if="currentImagePreview">
                            <div class="form-group">
                                <label class="text-white">Current Image:</label>
                                <div class="mt-2">
                                    <img
                                        :src="getImagePreviewUrl()"
                                        alt="Package Image Preview"
                                        class="image-preview" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-orange btn-block">Create Account</button>
                        </div>
                    </form>
                </div>
                <div class="loginBg p-4" v-if="verificationPending">
                    <form @submit.prevent="onVerificationSubmit">
                        <!-- Verification Code Message -->
                        <div class="form-group ">
                            <p class="text-white">Please enter the verification code sent to your mobile number: <strong>{{ MobileNo }}</strong></p>
                        </div>
<!--                        <div class="form-group">-->
<!--                            <p class="text-white">Please enter the verification code sent to your mobile number: <strong>{{ MobileNo }}</strong></p>-->
<!--                        </div>-->

                        <!-- Verification Code Input -->
                        <div class="form-group">
                            <label class="text-white" for="verificationCode">Verification Code</label>

                            <div class="row">
                                <div class="col-7 pr-1">
                                    <input
                                        type="text"
                                        id="verificationCode"
                                        v-model="userVerificationCode"
                                        placeholder="Enter Verification Code"
                                        class="form-control"
                                        required
                                        maxlength="6"
                                    />
                                </div>

                                <div class="col-5 pl-1">
                                    <button
                                        type="button"
                                        @click="resendOtp"
                                        class="btn btn-success btn-block"
                                    >
                                        Send Otp Again
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group text-center">
                            <button type="submit" class="btn btn-orange btn-block">Verify Number</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Common } from '../../mixins/common';
import moment from "moment";
import { baseurl } from "../../base_url";

export default {
    mixins: [Common, baseurl],
    data() {
        return {
            usermailorphone: '',
            Password: '',
            ConfirmPassword: '',
            rememberMe: false,
            BackgroundImage: '',
            TitleImage: '',
            LeftIconImage:'',
            DoctorCode:'',
            DoctorId:'',
            DoctorName:'',
            SelectedDistrict:'',
            MobileNo:'',
            ProfileImage: null,
            currentImagePreview: null,
            isVerified: false,
            verificationPending: false,
            userVerificationCode:'',
            lastLoginDate: '',
            sendOtpPending: false,
            Alldistricts : [
                { code: "01", name: "Dhaka" },
                { code: "02", name: "Chattogram" },
                { code: "03", name: "Khulna" },
                { code: "04", name: "Rajshahi" },
                { code: "05", name: "Barishal" },
                { code: "06", name: "Sylhet" },
                { code: "07", name: "Rangpur" },
                { code: "08", name: "Mymensingh" },
                { code: "09", name: "Comilla" },
                { code: "10", name: "Narayanganj" },
                { code: "11", name: "Brahmanbaria" },
                { code: "12", name: "Munshiganj" },
                { code: "13", name: "Kishoreganj" },
                { code: "14", name: "Narsingdi" },
                { code: "15", name: "Tangail" },
                { code: "16", name: "Faridpur" },
                { code: "17", name: "Magura" },
                { code: "18", name: "Shariatpur" },
                { code: "19", name: "Rajbari" },
                { code: "20", name: "Madaripur" },
                { code: "21", name: "Meherpur" },
                { code: "22", name: "Jashore" },
                { code: "23", name: "Jhenaidah" },
                { code: "24", name: "Kushtia" },
                { code: "25", name: "Chuadanga" },
                { code: "26", name: "Khulna" },
                { code: "27", name: "Satkhira" },
                { code: "28", name: "Patuakhali" },
                { code: "29", name: "Bhola" },
                { code: "30", name: "Barisal" },
                { code: "31", name: "Pirojpur" },
                { code: "32", name: "Shariatpur" },
                { code: "33", name: "Sylhet" },
                { code: "34", name: "Moulvibazar" },
                { code: "35", name: "Habiganj" },
                { code: "36", name: "Netrokona" },
                { code: "37", name: "Chandpur" },
                { code: "38", name: "Lakshmipur" },
                { code: "39", name: "Noakhali" },
                { code: "40", name: "Feni" },
                { code: "41", name: "Cox's Bazar" },
                { code: "42", name: "Bagerhat" },
                { code: "43", name: "Gopalganj" },
                { code: "44", name: "Shibganj" },
                { code: "45", name: "Jessore" },
                { code: "46", name: "Kurigram" },
                { code: "47", name: "Nilphamari" },
                { code: "48", name: "Dinajpur" },
                { code: "49", name: "Thakurgaon" },
                { code: "50", name: "Panchagarh" },
                { code: "51", name: "Bogura" },
                { code: "52", name: "Naogaon" },
                { code: "53", name: "Chapainawabganj" },
                { code: "54", name: "Pabna" },
                { code: "55", name: "Sirajganj" },
                { code: "56", name: "Jamalpur" },
                { code: "57", name: "Sherpur" },
                { code: "58", name: "Kurigram" },
                { code: "59", name: "Jamuna" },
                { code: "60", name: "Sunamganj" },
                { code: "61", name: "Jhalokathi" },
                { code: "62", name: "Moulvibazar" },
                { code: "63", name: "Netrakona" },
                { code: "64", name: "Chittagong Hill Tracts" }
            ]
        };
    },
    mounted() {
        this.BackgroundImage = baseurl + 'assets/images/bg/t20bg.png';
    },
    computed: {
        // Check if password and confirm password match
        passwordMismatch() {
            return this.Password !== this.ConfirmPassword;
        }
    },
    methods: {
        handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                // Validate file size (2MB)
                if (file.size > 2048000) {
                    this.errorNoti('File size must be less than 2MB');
                    this.$refs.imageInput.value = '';
                    return;
                }

                // Validate file type
                const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/gif'];
                if (!allowedTypes.includes(file.type)) {
                    this.errorNoti('Only JPG, PNG, GIF files are allowed');
                    this.$refs.imageInput.value = '';
                    return;
                }

                this.ProfileImage = file;

                // Create preview
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.currentImagePreview = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },

        getImagePreviewUrl() {
            if (this.currentImagePreview) {
                if (this.currentImagePreview.startsWith('data:')) {
                    return this.currentImagePreview;
                }
                return `${this.mainOrigin}public/storage/${this.currentImagePreview}`;
            }
            return '';
        },
        resendOtp() {
            this.axiosPostWithoutToken('resend-otp', {
                MobileNo: this.MobileNo,
            }, (response) => {
                if(response.success){
                    this.successNoti(response.message)
                }
                // this.redirect(this.mainOrigin + 'dashboard');
            }, (error) => {
                this.errorNoti(error);
                this.$store.commit('submitButtonLoadingStatus', false);
            });
        },

        onSubmit() {
            this.$store.commit('submitButtonLoadingStatus', true);
            this.axiosPostWithoutToken('sign-up', {
                DoctorName: this.DoctorName,
                SelectedDistrict: this.SelectedDistrict,
                MobileNo: this.MobileNo,
                Password: this.Password,
                ConfirmPassword: this.ConfirmPassword,
                ProfileImage: this.ProfileImage,
            }, (response) => {
                this.successNoti(response.message);
                if(response.success){
                    this.verificationPending = true
                }
                if(response.type.length> 0 && response.type==='NotVerified'){
                    this.verificationPending = true
                    this.lastLoginDate = response.data.UpdatedAt
                    this.checkSendOrpFlag(this.lastLoginDate);
                    console.log(this.lastLoginDate,'LL')
                }
                this.$store.commit('submitButtonLoadingStatus', false);
                // this.redirect(this.mainOrigin + 'dashboard');
            }, (error) => {
                this.errorNoti(error);
                this.$store.commit('submitButtonLoadingStatus', false);
            });
        },
        checkSendOrpFlag(lastLoginDate) {

            const parseUpdatedAt = (s) => {
                if (!s) return null
                const iso = s.replace(' ', 'T').replace(/(\.\d{3})\d+$/, '$1')
                const d = new Date(iso)
                return isNaN(d.getTime()) ? null : d
            }

            const updatedAt = parseUpdatedAt(lastLoginDate)
            if (!updatedAt) return

            const TWO_MIN = 2 * 60 * 1000
            const elapsed = Date.now() - updatedAt.getTime()

            if (elapsed > TWO_MIN) {
                // already past 2 minutes -> true now
                this.sendOtpPending = true
            } else {
                // not yet -> schedule it to become true exactly when 2 minutes pass
                const remaining = TWO_MIN - elapsed
                clearTimeout(this._otpPendingTimer)
                this._otpPendingTimer = setTimeout(() => {
                    this.sendOtpPending = true
                }, remaining)
            }
        },
        onVerificationSubmit() {
            this.axiosPostWithoutToken('registration-verification', {
                MobileNo: this.MobileNo,
                UserVerificationCode: this.userVerificationCode,

            }, (response) => {
                this.successNoti(response.message);
                if(response.success){
                    this.redirect(this.mainOrigin + 'login');
                }
                else{
                    this.errorNoti('Invalid Verification Code');
                }
                this.$store.commit('submitButtonLoadingStatus', false);
                // this.redirect(this.mainOrigin + 'dashboard');
            }, (error) => {
                this.errorNoti(error);
                this.$store.commit('submitButtonLoadingStatus', false);
            });
            console.log(this.mobileNo)
        }
    }
}
</script>

<style scoped>
.loginBody {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
}
/*.loginBody::before {*/
/*    content: '';*/
/*    position: absolute;*/
/*    top: 0;*/
/*    left: 0;*/
/*    right: 0;*/
/*    bottom: 0;*/
/*    background-color: #10044A;*/
/*    opacity: 0.1; !* Adjust opacity for overlay *!*/
/*    z-index: 0; !* Ensure it's behind the content *!*/
/*}*/
.signUpBody{
    padding-top: 130px;
}
.wrapper-page {
    max-width: 400px;
    margin: 0 auto;
    z-index: 1;
}

.card {
    border-radius: 15px;
    overflow: hidden;
}

.bg-gradient {
    background: linear-gradient(135deg, #fbb034 10%, #ffdd00 100%);
    padding: 20px;
    border-radius: 10px;
}
.loginBg {
    /*background-color: rgba(255, 255, 255, 0.5); !* Light transparent background *!*/
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 20px;
    position: relative;
    z-index: 2;
}


.form-control {
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 12px;
    font-size: 14px;
}

.btn-orange {
    background-color: #FF9100;
    color: white;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    width: 100%;
}

.btn-orange:hover {
    background-color: #e64a19;
}
.btn-white {
    background-color: #FFFFFF;
    color: #000000;
    border-radius: 8px;
    padding: 12px;
    font-size: 16px;
    width: 100%;
}

.btn-white:hover {
    background-color: #FFFFFF;
}
.text-center a {
    color: #FF5722;
    font-size: 14px;
}

.text-center a:hover {
    text-decoration: underline;
}
/* Icon styling */
.top-left-icon {
    position: absolute;
    top: 20px; /* Adjust as needed */
    left: 20px; /* Adjust as needed */
    /*width: 40px; !* Set your desired width *!*/
    height: auto;
    z-index: 1; /* Make sure it's above the background */
}
</style>
