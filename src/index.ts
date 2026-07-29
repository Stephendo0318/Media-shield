import { logger } from "@vendetta/utils";

export default {
    onLoad() {
        logger.info("Media-Shield loaded!");
    },

    onUnload() {
        logger.info("Media-Shield unloaded!");
    }
};