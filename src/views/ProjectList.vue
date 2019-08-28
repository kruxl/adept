<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="green"
          title="Projects"
          text="This is a list of your projects"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.country }}</td>
              <td>{{ item.city }}</td>
              <td>{{ item.duration }}</td>
              <td>{{ item.status }}</td>
              <!-- <td>{{ item.salary }}</td> -->
              <td class="text-xs-right"><v-btn
                icon
                small
                to="/icons"><v-icon color="success">mdi-airplay</v-icon></v-btn></td>
              <td><v-btn
                icon
                small
                to="/add-flow"><v-icon color="success">mdi-pencil</v-icon></v-btn></td>
            </template>
          </v-data-table>
          <v-btn
            color="warning"
            class="right"
            large
            @click="visible = !visible">Add new Project</v-btn>
        </material-card>
        <v-flex
          v-if="visible"
          xs12
          md8
        >
          <material-card
            color="warning"
            title="New Project"
            text="Fill in the project details below"
          >
            <v-form>
              <v-container py-0>
                <v-layout wrap>
                  <v-flex
                    xs12
                    md12
                  >
                    <v-text-field
                      v-model="newProject.name"
                      label="Project Name"
                      class="purple-input"/>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="newProject.country"
                      label="Country"
                      class="purple-input"/>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="newProject.city"
                      label="City"
                      class="purple-input"/>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="newProject.duration"
                      label="Duration"
                      class="purple-input"/>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-text-field
                      v-model="newProject.status"
                      label="Status"
                      class="purple-input"/>
                  </v-flex>
                  <v-flex
                    xs12
                    text-xs-right
                  >
                    <v-btn
                      class="mx-0 font-weight-light"
                      color="success"
                      block
                      @click="addNewProject"
                    >
                      Submit
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-form>
          </material-card>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: false,
        text: 'Name',
        value: 'name'
      },
      {
        sortable: false,
        text: 'Country',
        value: 'country'
      },
      {
        sortable: false,
        text: 'City',
        value: 'city'
      },
      {
        sortable: false,
        text: 'Duration',
        value: 'duration'
      },
      {
        sortable: false,
        text: 'Status',
        value: 'status'
      }
    ],
    items: [
      {
        name: 'Dakota Rice',
        country: 'Niger',
        city: 'Oud-Tunrhout',
        duration: '6 months',
        status: 'Completed'
      },
      {
        name: 'Minerva Hooper',
        country: 'Curaçao',
        city: 'Sinaai-Waas',
        duration: '1 year',
        status: 'In Progress'
      }
    ],
    newProject: {
      name: '',
      country: '',
      city: '',
      duration: '',
      status: ''
    },
    visible: false,
    e6: 1
  }),
  methods: {
    addNewProject () {
      this.items.push(this.newProject)
      this.newProject = {}
      this.visible = !this.visible
    }
  }
}
</script>
