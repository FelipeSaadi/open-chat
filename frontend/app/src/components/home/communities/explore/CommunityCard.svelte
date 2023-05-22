<script lang="ts">
    import type { Community } from "openchat-client";

    export let community: Community;
</script>

<div on:click class="card">
    <div class="banner">
        <div class="avatar" />
    </div>
    <div class="content">
        <div class="name">{community.name}</div>
        <div class="desc">{community.description}</div>
        <div class="footer">
            <span class="number">{community.memberCount.toLocaleString()}</span>
            <span class="members">{"members"}</span>
        </div>
    </div>
</div>

<style type="text/scss">
    .card {
        cursor: pointer;
        background-color: var(--recommended-bg);
        border: 1px solid var(--bd);
        border-radius: $sp3;

        .banner {
            position: relative;
            background-color: blueviolet;
            height: 150px;
            border-radius: $sp3 $sp3 0 0;

            .avatar {
                width: toRem(42);
                height: toRem(42);
                position: absolute;
                bottom: toRem(-15);
                left: $sp3;
                border-radius: 50%;
                background-color: orange;
            }
        }

        .content {
            padding: $sp4;
            padding-top: $sp5;

            .name {
                @include font(bold, normal, fs-130);
                margin-bottom: $sp3;
            }

            .desc {
                @include font(book, normal, fs-100, 28);
                color: var(--txt-light);
                margin-bottom: $sp4;
            }

            .footer {
                border-top: 1px solid var(--bd);
                padding-top: $sp4;

                .number {
                    font-weight: 500;
                }
                .members {
                    color: var(--txt-light);
                }
            }
        }
    }
</style>