<template>
    <div class="horizontal-progress-bar">
        <div
            v-for="(step, index) in steps"
            :key="index"
            :class="['step', {
        completed: currentStep > index + 1 || (currentStep === steps.length && index + 1 === steps.length),
        running: currentStep === index + 1 && currentStep !== steps.length,
        incomplete: currentStep < index + 1
      }]"
            v-show="isMobile ? true : true">
        <div class="step-marker">
            <span v-if="currentStep > index + 1 || (currentStep === steps.length && index + 1 === steps.length)">✔</span>
            <span v-if="currentStep === index + 1 && currentStep !== steps.length" class="running-marker"></span>
            <span v-if="currentStep < index + 1" class="incomplete-marker">✖</span>
        </div>
        <div class="step-label">{{ step.label }}</div>
    </div>
    </div>
</template>
<script>
export default {
    props: {
        steps: {
            type: Array,
            required: true,
        },
        currentStep: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            isMobile: false, // Track if the screen is mobile
        };
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
        },
    },
};
</script>

<style scoped>
.horizontal-progress-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 40px;
    padding: 0 20px;
}

.horizontal-progress-bar::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #ccc; /* Neutral gray line */
    border-radius: 2px;
    z-index: 0;
    transform: translateY(-50%);
}

.step {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
}

.step-marker {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    border: 4px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #fff;
    margin-bottom: 8px;
    transition: all 0.3s ease-in-out;
}

.step.completed .step-marker {
    border-color: #3498db; /* Blue color for completed steps */
    background-color: #3498db;
}

.step.completed .step-marker span {
    display: block;
}

.step.running .step-marker {
    border-color: #e74c3c; /* Red color for the running step */
    background-color: #e74c3c;
    animation: pulse 1.5s infinite; /* Running animation */
}

.step.incomplete .step-marker {
    border-color: #f39c12; /* Orange color for incomplete steps */
    background-color: #f39c12;
}

.step-label {
    color: #666;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.step.completed .step-label {
    color: #3498db; /* Blue color for completed labels */
    font-weight: bold;
}

.step.running .step-label {
    color: #e74c3c; /* Red color for the running step label */
    font-weight: bold;
}

.step.incomplete .step-label {
    color: #f39c12; /* Orange color for incomplete labels */
    font-weight: bold;
}

/* Running marker animation */
@keyframes pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.running-marker {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    animation: spin 1.5s linear infinite; /* Spinning animation */
}

.incomplete-marker {
    font-size: 16px;
    color: #fff; /* White color for the cross icon */
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* Mobile Responsiveness */
/* For mobile view, display the progress steps vertically */
/* For mobile view, display the progress steps vertically */
/* For mobile view, display the progress steps vertically */
@media (max-width: 768px) {
    .horizontal-progress-bar {
        flex-direction: column; /* Arrange steps vertically */
        justify-content: flex-start; /* Align items at the top */
        display: inline-block;
    }

    .horizontal-progress-bar::before {
        display: none; /* Remove the horizontal line on mobile */
    }

    .step {
        display: flex;
        flex-direction: row; /* Keep items in a row for each step */
        align-items: center;
        margin-bottom: 15px; /* Space between steps */
    }

    .step-marker {
        width: 40px; /* Larger marker for mobile */
        height: 40px;
        font-size: 16px; /* Larger icon */
        margin-right: 10px; /* Space between marker and label */
    }

    .step-label {
        font-size: 16px; /* Larger label */
    }

    .incomplete-marker {
        font-size: 20px; /* Larger cross icon */
    }

    .running-marker {
        width: 12px; /* Larger running marker */
        height: 12px;
    }
}




</style>
