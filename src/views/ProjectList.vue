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
              <td>{{ item.number }}</td>
              <td>{{ item.startDate }}</td>
              <td>{{ item.endDate }}</td>
              <td>                  <div class="d-flex">
                <v-tooltip
                  top
                  content-class="top">
                  <v-btn
                    slot="activator"
                    class="v-btn--simple"
                    color="success"
                    to="/add-flow"
                    icon
                  >
                    <v-icon color="primary">mdi-arrange-bring-forward</v-icon>
                  </v-btn>
                  <span>Add Flow</span>
                </v-tooltip>
                <v-tooltip
                  top
                  content-class="top">
                  <v-btn
                    slot="activator"
                    class="v-btn--simple"
                    color="success"
                    icon
                  >
                    <v-icon color="primary">mdi-airplay</v-icon>
                  </v-btn>
                  <span>View</span>
                </v-tooltip>
                <v-tooltip
                  top
                  content-class="top">
                  <v-btn
                    slot="activator"
                    class="v-btn--simple"
                    color="danger"
                    icon
                  >
                    <v-icon color="error">mdi-close</v-icon>
                  </v-btn>
                  <span>Delete</span>
                </v-tooltip>

              </div></td>
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
                    md6
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
                      v-model="newProject.number"
                      label="Project Number"
                      class="purple-input"/>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-menu
                      ref="menu"
                      v-model="menu1"
                      :close-on-content-click="false"
                      :return-value.sync="date1"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="newProject.startDate"
                          label="Start Date"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="newProject.startDate" no-title scrollable color="green lighten-1">
                        <v-spacer></v-spacer>
                        <v-btn text color="warning" @click="menu1 = false">Cancel</v-btn>
                        <v-btn text color="success" @click="$refs.menu.save(newProject.startDate)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-flex
                    xs12
                    md6
                  >
                    <v-menu
                      ref="menu"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :return-value.sync="date2"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="newProject.endDate"
                          label="End Date"
                          readonly
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="newProject.endDate" no-title scrollable color="green lighten-1">
                        <v-spacer></v-spacer>
                        <v-btn text color="warning" @click="menu2 = false">Cancel</v-btn>
                        <v-btn text color="success" @click="$refs.menu.save(newProject.endDate)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
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
        text: 'Project Name',
        value: 'name'
      },
      {
        sortable: false,
        text: 'Project Number',
        value: 'number'
      },
      {
        sortable: false,
        text: 'Start Date',
        value: 'startDate'
      },
      {
        sortable: false,
        text: 'End Date',
        value: 'endDate'
      }
    ],
    items: [],
    newProject: {
      name: '',
      number: '',
      startDate: '',
      endDate: ''
    },
    visible: false,
    e6: 1,
    date1: new Date().toISOString().substr(0, 10),
    date2: new Date().toISOString().substr(0, 10),
    menu1: false,
    modal: false,
    menu2: false
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
<style>
.v-btn--floating .v-btn__content {
  color: black;
}
.accent {
  background-color: red !important;
  border-radius: 50%;
}
.accent--text {
  color: red !important;
}
</style>

