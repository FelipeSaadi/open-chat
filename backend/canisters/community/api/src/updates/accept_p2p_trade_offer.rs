use candid::CandidType;
use serde::{Deserialize, Serialize};
use types::{ChannelId, MessageIndex};

#[derive(CandidType, Serialize, Deserialize, Debug)]
pub struct Args {
    pub channel_id: ChannelId,
    pub thread_root_message_index: Option<MessageIndex>,
    pub message_index: MessageIndex,
}

#[derive(CandidType, Serialize, Deserialize, Debug)]
pub enum Response {
    Success,
    InsufficientFunds,
    AlreadyAccepted,
    AlreadyCompleted,
    OfferExpired,
    OfferCancelled,
    OfferNotFound,
    ChannelNotFound,
    UserNotInCommunity,
    UserNotInChannel,
    UserSuspended,
    ChatFrozen,
    InternalError(String),
}