use candid::CandidType;
use serde::{Deserialize, Serialize};
use types::{ChannelId, ChannelSummary, GateCheckFailedReason};

#[derive(CandidType, Serialize, Deserialize, Debug)]
pub struct Args {
    pub channel_id: ChannelId,
}

#[derive(CandidType, Serialize, Deserialize, Debug)]
pub enum Response {
    Success(Box<ChannelSummary>),
    AlreadyInCommunity(Box<ChannelSummary>),
    GateCheckFailed(GateCheckFailedReason),
    UserNotInCommunity,
    ChannelNotFound,
    UserSuspended,
    UserBlocked,
    UserLimitReached(u32),
    CommunityFrozen,
    InternalError(String),
}