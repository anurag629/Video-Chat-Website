const APP_ID = 'c88a158f27d842f3872627abdee754e0'
const CHANNEL = 'main'
const TOCKEN = '006c88a158f27d842f3872627abdee754e0IAAUop+LaJDxx8mNMaXR6w/W+5h05CG2gcmy7EbghDh9u2TNKL8AAAAAEAD6A1gYXvrvYQEAAQBe+u9h'
let UID;

const client = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' })

let localTracks = []
let remoteUsers = {}

let joinAndDisplayLocalStream = async () => {
    UID = await client.join(APP_ID, CHANNEL, TOCKEN, null)

    localTracks = await AgoraRTC.createMicrophoneAndCameraTracks()

    let player = `<div class="video-container" id="user-container-${UID}">
                    <div class="username-wrapper"> <span class="user-name">My Name</span></div>
                    <div class="video-player" id="user-${UID}"></div>
                </div>`
    document.getElementById('video-streams').insertAdjacentHTML('beforeend', player)

    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0], localTracks[1]])

}

joinAndDisplayLocalStream()
