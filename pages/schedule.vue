<template>
    <div>
        <NavBar class="drop-shadow-lg" />
        <AppHeader />

        <div class="relative flex justify-center items-top min-h-screen bg-gray-50 bg-design">
            <div class="w-full px-4 py-8 sm:px-6 lg:px-8 lg:mx-52">
                <div
                    class="p-4 flex flex-col items-center content-center justify-center w-full rounded-lg bg-sky-100 drop-shadow mb-4 w-full"
                >
                    <div class="text-base font-bold text-sky-800">Schedule for Day 4</div>
                    <time class="text-xl text-sky-800">
                        {{ $dayjs('2023-07-17').format('DD MMM, YYYY') }}
                    </time>
                </div>

                <ol class="relative border-l-2 border-gray-400">
                    <li
                        :key="index"
                        v-for="(event, index) in schedule['Day 4']"
                        class="mb-6 ml-4 overflow-hidden shadow rounded-lg p-4"
                        :class="{
                            'bg-green-50': event.state == 'IN PROGRESS',
                            'bg-white': event.state == 'SCHEDULED',
                            'bg-gray-50': event.state == 'COMPLETED',
                        }"
                    >
                        <div
                            class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-[0.42rem] border border-gray-100"
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

                        <h4
                            v-if="event.place"
                            class="block mt-1 mb-2 text-sm font-normal leading-none text-blue-500"
                        >
                            Location: {{ event.place }}
                        </h4>

                        <h3 class="text-base font-semibold text-gray-900 mb-1">
                            {{ event.title }}
                        </h3>

                        <h3 class="text-sm text-gray-800">
                            {{ event.subtitle }}
                        </h3>

                        <div class="text-sm text-red-800" v-if="event.presenters">
                            Presenter: {{ event.presenters }}
                        </div>

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
                    start_time: '2023-07-13 08:15',
                    end_time: '2023-07-13 08:50',
                    type: 'EVENT',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Inauguration Ceremony',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-13 09:00',
                    end_time: '2023-07-13 10:30',
                    type: 'EVENT',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Tea Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-13 10:30',
                    end_time: '2023-07-13 10:45',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Overview of NGS Technologies',
                    subtitle: '(Platforms, Chemistry, library preparation)',
                    presenters: 'Arindam Maitra',
                    start_time: '2023-07-13 10:45',
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
                    presenters: 'Analabha Basu',
                    start_time: '2023-07-13 14:00',
                    end_time: '2023-07-13 17:00',
                    type: 'EVENT',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                // {
                //     title: 'Challenges in handling high-throughput sequencing data',
                //     subtitle: '(Data transfer, storage, archive and analysis)',
                //     presenters: 'Nidhan K. Biswas',
                //     start_time: '2023-07-13 16:45',
                //     end_time: '2023-07-13 17:00',
                //     type: 'EVENT',
                //     place: 'Seminar Hall',
                //     state: 'SCHEDULED',
                // },
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
                    title: 'Challenges in handling high-throughput sequencing data & Linux : Introduction to the command line [Hands on]',
                    subtitle: '',
                    presenters: 'Nidhan K. Biswas and team',
                    start_time: '2023-07-13 17:30',
                    end_time: '2023-07-13 19:00',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
            ],
            'Day 2': [
                {
                    title: 'Introduction to next generation sequence data analysis',
                    subtitle:
                        '(Data generation, QC, Alignment, post-alignment processing, variant calling, Annotation)',
                    presenters: 'Nidhan K. Biswas',
                    start_time: '2023-07-14 09:00',
                    end_time: '2023-07-14 11:00',
                    type: 'EVENT',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Tea Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-14 11:00',
                    end_time: '2023-07-14 11:30',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Introduction to next generation sequence data analysis (continued)',
                    subtitle:
                        '(Data generation, QC, Alignment, post-alignment processing, variant calling, Annotation)',
                    presenters: 'Nidhan K. Biswas',
                    start_time: '2023-07-14 11:30',
                    end_time: '2023-07-14 13:00',
                    type: 'EVENT',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Lunch Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-14 13:00',
                    end_time: '2023-07-14 14:00',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Advance Linux: Advance commands',
                    subtitle: '',
                    presenters: 'Nidhan K. Biswas and team',
                    start_time: '2023-07-14 14:00',
                    end_time: '2023-07-14 15:00',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Introduction to NGS file formats',
                    subtitle: '(BED, FASTA, FASTQ etc, databases (UCSC) and associated tools)',
                    presenters: 'Nidhan K. Biswas',
                    start_time: '2023-07-14 15:00',
                    end_time: '2023-07-14 17:00',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Tea Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-14 17:00',
                    end_time: '2023-07-14 17:15',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Quiz',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-14 17:15',
                    end_time: '2023-07-14 17:40',
                    type: 'BREAK',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Introduction to NGS file formats (continued)',
                    subtitle: '',
                    presenters: 'Nidhan K. Biswas',
                    start_time: '2023-07-14 17:50',
                    end_time: '2023-07-14 19:00',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
            ],
            'Day 3': [
                {
                    title: '[Hands on] Pre-alignment QC',
                    subtitle: '(FASTQC, PRINSEQ,... etc)',
                    presenters: 'Subrata Das and team',
                    start_time: '2023-07-15 09:00',
                    end_time: '2023-07-15 10:30',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Exome Sequence data analysis',
                    subtitle: '( Alignment, Read Filtering & Post alignment processing)',
                    presenters: 'Subrata Das and team',
                    start_time: '2023-07-15 10:30',
                    end_time: '2023-07-15 11:00',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Tea Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-15 11:00',
                    end_time: '2023-07-15 11:30',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Exome Sequencing data analysis (cont….)',
                    subtitle: '(Variant calling and annotation)',
                    presenters: 'Subrata Das and team',
                    start_time: '2023-07-15 11:30',
                    end_time: '2023-07-15 13:00',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Lunch Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-15 13:00',
                    end_time: '2023-07-15 14:00',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Analysis of genomic structural alterations',
                    subtitle: '(Copy Number Variation and Structural Variation)',
                    presenters: 'Chitrarpita Das',
                    start_time: '2023-07-15 14:00',
                    end_time: '2023-07-15 15:00',
                    type: 'EVENT',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Read and Mutation Visualization',
                    subtitle:
                        '(Visualize Sequence, alignment and different types of variants (SNV, INDEL, CNV & SV) through Integrative Genomics Viewer (IGV))',
                    presenters: 'Arnab Ghosh, Chitrarpita Das and team',
                    start_time: '2023-07-15 15:00',
                    end_time: '2023-07-15 17:00',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Tea Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-15 17:00',
                    end_time: '2023-07-15 17:15',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Quiz',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-15 17:15',
                    end_time: '2023-07-15 17:40',
                    type: 'BREAK',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Additional session on CNV detection',
                    subtitle:
                        '(Detection of copy number variants from genome-wide array data, paired-end sequence data)',
                    presenters: 'Chitrarpita Das and Arnab Ghosh',
                    start_time: '2023-07-15 17:40',
                    end_time: '2023-07-15 18:30',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
            ],

            'Day 4': [
                {
                    title: '[Hands on] Circos - Mutation and CNV visualization',
                    subtitle: '',
                    presenters: 'Arnab Ghosh and team',
                    start_time: '2023-07-17 09:00',
                    end_time: '2023-07-17 11:30',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Tea Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-17 11:30',
                    end_time: '2023-07-17 12:00',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Circos - Mutation and CNV visualization',
                    subtitle: '',
                    presenters: 'Arnab Ghosh and team',
                    start_time: '2023-07-17 12:00',
                    end_time: '2023-07-17 13:00',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Lunch Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-17 13:00',
                    end_time: '2023-07-17 14:00',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Introduction to R',
                    subtitle: '(Commands, Functions and Case Study: Data Processing through R)',
                    presenters: 'Diptarup Nandi and team',
                    start_time: '2023-07-17 14:00',
                    end_time: '2023-07-17 15:30',
                    type: 'EVENT',
                    place: 'Workshop Room',
                    state: 'SCHEDULED',
                },
                {
                    title: 'External talk (International expert)',
                    subtitle: '',
                    presenters: 'Navonil De Sarkar',
                    start_time: '2023-07-17 15:30',
                    end_time: '2023-07-17 17:00',
                    type: 'EVENT',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Tea Break',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-17 17:00',
                    end_time: '2023-07-17 17:20',
                    type: 'BREAK',
                    place: '',
                    state: 'SCHEDULED',
                },
                {
                    title: 'Quiz',
                    subtitle: '',
                    presenters: '',
                    start_time: '2023-07-15 17:20',
                    end_time: '2023-07-15 17:40',
                    type: 'BREAK',
                    place: 'Seminar Hall',
                    state: 'SCHEDULED',
                },
                {
                    title: '[Hands on] Data visualisation through R (Cont.)',
                    subtitle: '',
                    presenters: 'Diptarup Nandi and team',
                    start_time: '2023-07-17 17:40',
                    end_time: '2023-07-17 19:00',
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
            forEach(this.schedule['Day 4'], (d) => {
                d.state = this.$dayjs().isBetween(this.$dayjs(d.start_time), this.$dayjs(d.end_time), null, '[]')
                    ? 'IN PROGRESS'
                    : 'SCHEDULED'
            })
            setTimeout(() => {
                forEach(this.schedule['Day 4'], (d) => {
                    d.state = this.$dayjs().isBetween(
                        this.$dayjs(d.start_time),
                        this.$dayjs(d.end_time),
                        null,
                        '[]',
                    )
                        ? 'IN PROGRESS'
                        : 'SCHEDULED'
                })
            }, 30000)
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
