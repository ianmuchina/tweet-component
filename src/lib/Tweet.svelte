<script lang="ts">
  // Props
  export let tweet: Tweet;
  // Styles
  import "./css/main.scss";

  import type { Tweet } from "./types";

  // Helpers
  function tweetUrl(id: string) {
    return `https://twitter.com/i/web/status/${id}`;
  }
  function replyUrl(id: string) {
    return `https://twitter.com/intent/like?in_reply_to=${id}`;
  }

  function likeUrl(id) {
    return `https://twitter.com/intent/like?tweet_id=${id}`;
  }

  function userUrl(id) {
    return `https://twitter.com/i/user/${id}`;
  }

  function compact(n: number) {
    return n.toLocaleString("en", {
      notation: "compact",
      compactDisplay: "short",
    });
  }
  // hashtags
  tweet.entities.hashtags.forEach((e) => {
    tweet.text = tweet.text.replaceAll(
      `#${e.text}`,
      `<a href="https://twitter.com/hashtag/${e.text}">#${e.text}</a>`
    );
  });

  // user_mentions
  tweet.entities.user_mentions.forEach((e) => {
    tweet.text = tweet.text.replaceAll(
      `@${e.screen_name}`,
      `<a href=${userUrl(e.id_str)}>@${e.screen_name}</a>`
    );
  });

  // symbols
  tweet.entities.symbols.forEach((e) => {
    ``;
    tweet.text = tweet.text.replaceAll(
      `$${e.text}`,
      `<a href="https://twitter.com/search?q=%24${e.text}">$${e.text}</a>`
    );
  });

  // Urls
  // FIXME: This is not secure
  tweet.entities.urls.forEach((e) => {
    tweet.text = tweet.text.replace(
      e.url,
      `<a href="${e.expanded_url}" target="_blank" rel="noopener noreferrer">${e.display_url}</a>`
    );
  });

  // Media
  // Remove Links to photos & Videos
  if (tweet.entities.media !== undefined) {
    tweet.entities.media.forEach((e) => {
      tweet.text = tweet.text.replace(e.url, "");
    });
  }
  // Polls
  interface Polls {
    totalVotes: number;
    data: Poll[];
  }
  interface Poll {
    label: string;
    count: number;
    percent: number;
    isWinner: boolean;
  }

  let polls: Polls = {
    totalVotes: 0,
    data: [],
  };
  //

  // Twitter's API represents poll in a weird and verbose way.
  if (
    tweet.card !== undefined &&
    tweet.card.binding_values !== undefined &&
    tweet.card.binding_values.counts_are_final !== undefined
  ) {
    // 1
    // Totals
    polls.totalVotes += parseInt(
      tweet.card.binding_values.choice1_count.string_value
    );
    // Data
    polls.data.push({
      label: tweet.card.binding_values.choice1_label.string_value,
      count: parseInt(tweet.card.binding_values.choice1_count.string_value),
      percent: 0,
      isWinner: false,
    });
    // 2
    // Totals
    polls.totalVotes += parseInt(
      tweet.card.binding_values.choice2_count.string_value
    );
    // Data
    polls.data.push({
      label: tweet.card.binding_values.choice2_label.string_value,
      count: parseInt(tweet.card.binding_values.choice2_count.string_value),
      percent: 0,
      isWinner: false,
    });
    // 3
    if (tweet.card.binding_values.choice3_count.string_value !== undefined) {
      // Totals
      polls.totalVotes += parseInt(
        tweet.card.binding_values.choice3_count.string_value
      );
      // Data
      polls.data.push({
        label: tweet.card.binding_values.choice3_label.string_value,
        count: parseInt(tweet.card.binding_values.choice3_count.string_value),
        percent: 0,
        isWinner: false,
      });
    }
    // 4
    if (tweet.card.binding_values.choice4_count.string_value !== undefined) {
      // Totals
      polls.totalVotes += parseInt(
        tweet.card.binding_values.choice4_count.string_value
      );
      // Data
      polls.data.push({
        label: tweet.card.binding_values.choice4_label.string_value,
        count: parseInt(tweet.card.binding_values.choice4_count.string_value),
        percent: 0,
        isWinner: false,
      });
    }
    // calculate Percentages
    polls.data.forEach((p) => {
      p.percent = (p.count / polls.totalVotes) * 100;
      // ((p.count / polls.totalVotes) * 100).toFixed(1)
    });

    let max = 0;
    // find max value
    for (const p of polls.data) {
      if (p.count > max) {
        max = p.count;
      }
    }
    // Set Max value
    for (const p of polls.data) {
      if (p.count === max) {
        p.isWinner = true;
      }
    }
  }
</script>

<article class="tweet" lang={tweet.lang}>
  <!-- User Info -->
  <div class="userInfo">
    <!-- Profile Pic -->
    <img
      class="profilePhoto"
      src={tweet.user.profile_image_url_https}
      alt="Profile Pic"
    />

    <div>
      <!-- UserName -->
      <a
        class="userName"
        href={userUrl(tweet.user.id_str)}
        referrerpolicy="no-referrer"
        rel="_blank"
      >
        {tweet.user.name}

        {#if tweet.user.verified}
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-label="CheckMark Icon"
            class="checkmark"
            width="24"
            height="24"
          >
            <g fill="currentColor">
              <path
                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                fill="currentColor"
              />
            </g>
          </svg>
        {/if}
      </a>
      <!-- Screen Name -->
      <span class="screenName">@<span>{tweet.user.screen_name}</span> </span>
    </div>
  </div>
  <!-- End User Info -->

  <!-- FullText -->
  <!-- TODO: Entities -->
  <p class="fullText">
    <!-- {tweet.text} -->
    <!-- FIXME: NOT SANITISED -->
    {@html tweet.text}
  </p>
  <!-- End FullText -->

  <!-- Gallery -->

  {#if tweet.photos}
    {#if tweet.photos.length > 0}
      <div class="gallery gallery-{tweet.photos.length}">
        {#each tweet.photos as photo}
          <img
            style="background-color: rgb({photo.backgroundColor.red},{photo
              .backgroundColor.green},{photo.backgroundColor.blue});"
            loading="lazy"
            src="{photo.url}:small"
            alt={photo.accessibilityLabel}
          />
          <!-- https://web.dev/learn/design/responsive-images/ -->
          <!-- https://web.dev/learn/design/picture-element/#image-sizes -->
          <!-- https://stackoverflow.com/q/39108742/13807223 -->
        {/each}
      </div>
    {/if}
  {/if}
  <!-- End Gallery -->

  <!-- svelte-ignore a11y-media-has-caption -->
  <!-- Videos & Gifs -->
  <section>
    {#if tweet.video}
      <!-- Gif -->
      {#if tweet.video.contentType === "gif"}
        <video loop muted autoplay poster={tweet.video.poster}>
          {#each tweet.video.variants as v}
            <source src={v.src} type={v.type} />
          {/each}
          Sorry, your browser doesn't support embedded videos.
        </video>
      {/if}

      <!-- Video -->
      {#if tweet.video.contentType === "media_entity"}
        <video preload="none" controls loop poster={tweet.video.poster}>
          {#each tweet.video.variants as v}
            <source src={v.src} type={v.type} />
          {/each}
          Sorry, your browser doesn't support embedded videos.
        </video>
      {/if}
    {/if}
  </section>
  <!-- End Videos & Gifs -->

  <!-- Polls -->

  {#if polls.data.length > 0}
    <section class="polls">
      {#each polls.data as p}
        <div class:win={p.isWinner === true} class=" poll_container">
          <!--  -->
          <div class=" progress_container_text">
            <div class="progress_container_text_align_center">
              <span>{p.label} </span>
              <span>{p.percent.toFixed(1)}%</span>
            </div>
          </div>
          <div
            class:win_bar={p.isWinner}
            style="width: {p.percent.toFixed(1)}%;"
            class="progress_bar"
            aria-hidden="true"
          />
        </div>
      {/each}
      <!-- Total Votes -->
      <div class="text-secondary">
        {polls.totalVotes} votes
      </div>
    </section>
  {/if}
  <!-- End Poll -->

  <!-- Open Graph -->
  <!-- Small -->
  <!-- End Small -->
  <!-- Large -->
  <!-- End Large -->
  <!-- End Open Graph -->

  <!-- Quoted -->
  <!-- End Quoted -->

  <!-- Date -->
  <!-- End Date -->

  <!-- Metadata: Likes, Link to tweet -->
  <section class="meta">
    <!-- Likes -->
    <a class="likes" href={likeUrl(tweet.id_str)}>
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor">
          <path
            d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
            fill="currentColor"
          />
        </g>
      </svg>
      {compact(tweet.favorite_count)}
    </a>

    <!-- Link To Tweet -->
    <a
      href={tweetUrl(tweet.id_str)}
      target="_blank"
      rel="noopener noreferrer"
      class="link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns-xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        viewBox="0 0 24 24"
      >
        <g fill="currentColor">
          <path
            d="M11.96 14.945c-.067 0-.136-.01-.203-.027-1.13-.318-2.097-.986-2.795-1.932-.832-1.125-1.176-2.508-.968-3.893s.942-2.605 2.068-3.438l3.53-2.608c2.322-1.716 5.61-1.224 7.33 1.1.83 1.127 1.175 2.51.967 3.895s-.943 2.605-2.07 3.438l-1.48 1.094c-.333.246-.804.175-1.05-.158-.246-.334-.176-.804.158-1.05l1.48-1.095c.803-.592 1.327-1.463 1.476-2.45.148-.988-.098-1.975-.69-2.778-1.225-1.656-3.572-2.01-5.23-.784l-3.53 2.608c-.802.593-1.326 1.464-1.475 2.45-.15.99.097 1.975.69 2.778.498.675 1.187 1.15 1.992 1.377.4.114.633.528.52.928-.092.33-.394.547-.722.547z"
            fill="currentColor"
          />
          <path
            d="M7.27 22.054c-1.61 0-3.197-.735-4.225-2.125-.832-1.127-1.176-2.51-.968-3.894s.943-2.605 2.07-3.438l1.478-1.094c.334-.245.805-.175 1.05.158s.177.804-.157 1.05l-1.48 1.095c-.803.593-1.326 1.464-1.475 2.45-.148.99.097 1.975.69 2.778 1.225 1.657 3.57 2.01 5.23.785l3.528-2.608c1.658-1.225 2.01-3.57.785-5.23-.498-.674-1.187-1.15-1.992-1.376-.4-.113-.633-.527-.52-.927.112-.4.528-.63.926-.522 1.13.318 2.096.986 2.794 1.932 1.717 2.324 1.224 5.612-1.1 7.33l-3.53 2.608c-.933.693-2.023 1.026-3.105 1.026z"
            fill="currentColor"
          />
        </g>
      </svg>
      Link to Tweet
    </a>
  </section>
</article>
