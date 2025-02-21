class RewardService {
    $modal;

    showRewardDialog(reward) {
        return this.$modal({ component: "RewardDialog", props: { reward }, "content-class": "elevation-0 reward-collected-dialog-wrapper" })
    }
}

export default new RewardService()