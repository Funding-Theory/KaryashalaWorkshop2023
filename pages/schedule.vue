<template>
    <div>
        <NavBar class="drop-shadow-lg" />
        <AppHeader />

        <div class="relative flex justify-center items-top min-h-screen bg-gray-50 bg-design">
            <div class="w-full px-4 py-8 sm:px-6 lg:px-8 lg:mx-52">
                <div class="p-4 flex justify-center w-full border rounded-lg bg-white mb-4 w-36">
                    <time class="text-lg font-semibold text-gray-900">
                        <!-- July 13th, 2023 -->
                        {{ $dayjs().format('DD MMM, YYYY') }}
                    </time>
                </div>

                <ol class="relative border-l">
                    <li
                        :key="index"
                        v-for="(event, index) in schedule['Day 1']"
                        class="mb-6 ml-4 overflow-hidden shadow rounded-lg p-4"
                        :class="{
                            'bg-green-50': event.state == 'IN PROGRESS',
                            'bg-white': event.state == 'SCHEDULED',
                            'bg-gray-50': event.state == 'COMPLETED',
                        }"
                    >
                        <div
                            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                        ></div>
                        <span
                            v-if="event.state != 'SCHEDULED'"
                            class="text-sm font-medium rounded capitalize px-2.5 py-1 text-center"
                            :class="{
                                'bg-green-100 text-green-800': event.state == 'IN PROGRESS',
                                'bg-gray-50 text-gray-800 border': event.state == 'COMPLETED',
                            }"
                        >
                            {{ event.state }}
                        </span>

                        <time class="block mt-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                            {{ $dayjs(event.start_time).format('hh:mm A') }} -
                            {{ $dayjs(event.end_time).format('hh:mm A') }}
                        </time>

                        <h4 v-if="event.place" class="block mb-2 text-sm font-normal leading-none text-blue-500">
                            Location: {{ event.place }}
                        </h4>

                        <h3 class="text-base font-semibold text-gray-900 mb-1">
                            {{ event.title }}
                        </h3>

                        <h3 class="text-sm text-gray-800">
                            {{ event.subtitle }}
                        </h3>

                        <!--           <span
            class="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
          >
            In progress
          </span> -->
                    </li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
import { forEach } from 'lodash'

export default {
    data: () => ({
        schedule: {
            'Day 1': [
                {
                    title: 'Registration',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-13 08:30',
                    end_time: '2023-07-13 09:00',
                    type: 'EVENT',
                    place: '',
                    state: 'COMPLETED',
                },
                {
                    title: 'Inauguration',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-13 09:00',
                    end_time: '2023-07-13 11:00',
                    type: 'EVENT',
                    place: '',
                    state: 'COMPLETED',
                },
                {
                    title: 'Tea Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-13 11:00',
                    end_time: '2023-07-13 11:30',
                    type: 'BREAK',
                    place: '',
                    state: 'IN PROGRESS',
                },
                {
                    title: 'Overview of NGS Technologies',
                    subtitle: '(Platforms, Chemistry, library preparation)',
                    presenters: '',
                    start_time: '2023-07-13 11:30',
                    end_time: '2023-07-13 13:00',
                    type: 'EVENT',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Lunch Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-13 13:00',
                    end_time: '2023-07-13 14:00',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Statistics',
                    subtitle: '(Probability, Distributions, Tests of significance)',
                    presenters: '',
                    start_time: '2023-07-13 14:00',
                    end_time: '2023-07-13 16:30',
                    type: 'EVENT',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Challenges in handling high-throughput sequencing data',
                    subtitle: '(Data transfer, storage, archive and analysis)',
                    presenters: '',
                    start_time: '2023-07-13 16:30',
                    end_time: '2023-07-13 17:00',
                    type: 'EVENT',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Tea Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-13 17:00',
                    end_time: '2023-07-13 17:30',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Linux : Introduction to the command line [Hands on]',
                    subtitle: '(Data transfer, storage, archive and analysis)',
                    presenters: '',
                    start_time: '2023-07-13 17:30',
                    end_time: '2023-07-13 19:00',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
            ],
        },
    }),
    components: {},
    methods: {},
    mounted() {
        this.$nextTick(() => {
            forEach(this.schedule['Day 1'], (d) => {
                d.state = this.$dayjs().isBetween(this.$dayjs(d.start_time), this.$dayjs(d.end_time), null, '[]')
                    ? 'IN PROGRESS'
                    : 'SCHEDULED'
            })
        })
    },
}
</script>

<style scoped>
.bg-design {
    background-color: #d7e4f0;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");
}
</style>