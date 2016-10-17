<template>
    <div class="meta-character">
        <div class="character-center any">
            <ul>
                <li v-for="item in character.anyCharacter"
                    :class="{'h1': item.type==='h1',
                             'h2': item.type==='h2',
                             'weight': item.type!=='text',
                             'add': item.type==='add'}">
                    <label v-if="item.type==='text'">
                        {{item.character | backSlash}}
                    </label>
                    <span>
                        {{item.mean | backSlash}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="character-center blank">
            <ul>
                <li v-for="item in character.blankCharacter"
                    :class="{'h1': item.type==='h1',
                             'h2': item.type==='h2',
                             'weight': item.type!=='text',
                             'add': item.type==='add'}">
                    <label v-if="item.type==='text'">
                        {{item.character | backSlash}}
                    </label>
                    <span>
                         {{item.mean | backSlash}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="character-center given">
            <ul>
                <li v-for="item in character.givenCharacter"
                    :class="{'h1': item.type==='h1',
                             'h2': item.type==='h2',
                             'weight': item.type!=='text',
                             'add': item.type==='add'}">
                    <label v-if="item.type==='text'">
                        {{item.character | backSlash}}
                    </label>
                    <span>
                         {{item.mean | backSlash}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="character-center posix">
            <ul>
                <li v-for="item in character.posixCharacter"
                    :class="{'h1': item.type==='h1',
                             'h2': item.type==='h2',
                             'weight': item.type!=='text',
                             'add': item.type==='add'}">
                    <label v-if="item.type==='text'">
                        {{item.character | backSlash}}
                    </label>
                    <span>
                         {{item.mean | backSlash}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="character-center repeat">
            <ul>
                <li v-for="item in character.repeatCharacter"
                    :class="{'h1': item.type==='h1',
                             'h2': item.type==='h2',
                             'weight': item.type!=='text',
                             'add': item.type==='add'}">
                    <label v-if="item.type==='text'">
                        {{item.character | backSlash}}
                    </label>
                    <span>
                         {{item.mean | backSlash}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="character-center tool">
            <ul>
                <li v-for="item in character.toolCharacter"
                    :class="{'h1': item.type==='h1',
                             'h2': item.type==='h2',
                             'weight': item.type!=='text',
                             'add': item.type==='add'}">
                    <label v-if="item.type==='text'">
                        {{item.character | backSlash}}
                    </label>
                    <span>
                         {{item.mean | backSlash}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="character-center group">
            <ul>
                <li v-for="item in character.groupCharacter"
                    :class="{'h1': item.type==='h1',
                             'h2': item.type==='h2',
                             'weight': item.type!=='text',
                             'add': item.type==='add'}">
                    <label v-if="item.type==='text'">
                        {{item.character | backSlash}}
                    </label>
                    <span>
                         {{item.mean | backSlash}}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass" scoped>
    .meta-character{
        overflow-y: auto;
        height: 100%;
        padding: 10px;
        color: #fff;
        font-size: 10px;
        ul{
            li{
                display: flex;
                align-items: center;
                padding: 5px 0;
                &:nth-child(odd){
                    background: burlywood;
                }
                &:first-child{
                    background: transparent;
                }
                label{
                    flex: 1;
                    text-align: center;
                }
                span{
                    flex: 4;
                }
                &.weight{
                    font-weight: bold;
                    padding: 0;
                }
                &.h1{
                    line-height: 2.5;
                    font-size: 14px;
                    color: #ccc;
                }
                &.h2{
                    line-height: 2;
                    font-size: 12px;
                    color: #eee;
                }
                &.add{
                    font-weight: normal;
                    padding: 5px 0;
                    font-style: italic;
                }
            }
        }
        .character-center{
            margin-bottom: 10px;
        }
    }
</style>
<script>

    export default{
        data(){
            return{
                characters: []
            }
        },
        props: ['character'],
        components:{

        },
        filters: {
            backSlash(value){
                return value.replace(/((-)(.+?)(-))/g, '\\$3');
            }
        }
    }
</script>
