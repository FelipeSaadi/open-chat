import type { IDL } from "@dfinity/candid";
import {
    _SERVICE,
    AddReactionResponse,
    AddMembersToChannelResponse,
    AddMembersToChannelFailed,
    AddMembersToChannelPartialSuccess,
    UserFailedError,
    UserFailedGateCheck,
    BlockUserResponse,
    ChangeChannelRoleResponse,
    ChangeRoleResponse,
    CommunityRole,
    CommunityPermissionRole,
    CreateChannelResponse,
    DeclineInvitationResponse,
    DeleteChannelResponse,
    DeleteMessagesResponse,
    DeletedMessageResponse,
    DisableInviteCodeResponse,
    EditMessageResponse,
    EventsResponse,
    GroupRole,
    InviteCodeResponse,
    JoinChannelResponse,
    LeaveChannelResponse,
    LocalUserIndexResponse,
    MakeChannelPrivateResponse,
    MakePrivateResponse,
    MessagesByMessageIndexResponse,
    OptionalCommunityPermissions,
    PinMessageResponse,
    RemoveMemberResponse,
    RemoveMemberFromChannelResponse,
    RemoveReactionResponse,
    EnableInviteCodeResponse,
    RulesResponse,
    SearchChannelResponse,
    SelectedChannelInitialResponse,
    SelectedChannelUpdatesResponse,
    SendMessageResponse,
    SummaryResponse,
    SummaryUpdatesResponse,
    ToggleMuteChannelNotificationsResponse,
    ToggleMuteNotificationsResponse,
    UnblockUserResponse,
    UndeleteMessagesResponse,
    UpdateChannelResponse,
    UpdateCommunityResponse,
    CommunityCanisterChannelSummary,
    MessageMatch,
} from "./types";
export {
    _SERVICE as CommunityService,
    AddReactionResponse as ApiAddReactionResponse,
    AddMembersToChannelResponse as ApiAddMembersToChannelResponse,
    AddMembersToChannelFailed as ApiAddMembersToChannelFailed,
    AddMembersToChannelPartialSuccess as ApiAddMembersToChannelPartialSuccess,
    UserFailedError as ApiUserFailedError,
    UserFailedGateCheck as ApiUserFailedGateCheck,
    BlockUserResponse as ApiBlockUserResponse,
    ChangeChannelRoleResponse as ApiChangeChannelRoleResponse,
    ChangeRoleResponse as ApiChangeRoleResponse,
    CommunityRole as ApiCommunityRole,
    CommunityPermissionRole as ApiCommunityPermissionRole,
    CreateChannelResponse as ApiCreateChannelResponse,
    DeclineInvitationResponse as ApiDeclineInvitationResponse,
    DeleteChannelResponse as ApiDeleteChannelResponse,
    DeleteMessagesResponse as ApiDeleteMessagesResponse,
    DeletedMessageResponse as ApiDeletedMessageResponse,
    DisableInviteCodeResponse as ApiDisableInviteCodeResponse,
    EditMessageResponse as ApiEditMessageResponse,
    EventsResponse as ApiEventsResponse,
    GroupRole as ApiGroupRole,
    InviteCodeResponse as ApiInviteCodeResponse,
    JoinChannelResponse as ApiJoinChannelResponse,
    LeaveChannelResponse as ApiLeaveChannelResponse,
    LocalUserIndexResponse as ApiLocalUserIndexResponse,
    MakeChannelPrivateResponse as ApiMakeChannelPrivateResponse,
    MakePrivateResponse as ApiMakePrivateResponse,
    MessagesByMessageIndexResponse as ApiMessagesByMessageIndexResponse,
    OptionalCommunityPermissions as ApiOptionalCommunityPermissions,
    PinMessageResponse as ApiPinMessageResponse,
    RemoveMemberResponse as ApiRemoveMemberResponse,
    RemoveMemberFromChannelResponse as ApiRemoveMemberFromChannelResponse,
    RemoveReactionResponse as ApiRemoveReactionResponse,
    EnableInviteCodeResponse as ApiEnableInviteCodeResponse,
    RulesResponse as ApiRulesResponse,
    SearchChannelResponse as ApiSearchChannelResponse,
    SelectedChannelInitialResponse as ApiSelectedChannelInitialResponse,
    SelectedChannelUpdatesResponse as ApiSelectedChannelUpdatesResponse,
    SendMessageResponse as ApiSendMessageResponse,
    SummaryResponse as ApiSummaryResponse,
    SummaryUpdatesResponse as ApiSummaryUpdatesResponse,
    ToggleMuteChannelNotificationsResponse as ApiToggleMuteChannelNotificationsResponse,
    ToggleMuteNotificationsResponse as ApiToggleMuteNotificationsResponse,
    UnblockUserResponse as ApiUnblockUserResponse,
    UndeleteMessagesResponse as ApiUndeleteMessagesResponse,
    UpdateChannelResponse as ApiUpdateChannelResponse,
    UpdateCommunityResponse as ApiUpdateCommunityResponse,
    CommunityCanisterChannelSummary as ApiCommunityCanisterChannelSummary,
    MessageMatch as ApiMessageMatch,
};

export const idlFactory: IDL.InterfaceFactory;